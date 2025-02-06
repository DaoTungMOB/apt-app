import { Modal, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { Text, XStack } from "tamagui";
import { FetchApi, formatVND } from "@/utils";
import { AppButtonNormal } from "@/elements";
import WebView from "react-native-webview";
import Toast from "react-native-toast-message";
import qs from "qs";
import payPalApi from "@/utils/payPalApi/payPalApi";

export default function Payment() {
  const router = useRouter()
  const navigation = useNavigation();
  const {
    invoice_id,
    invoice_title,
    invoice_unitPrice,
    invoice_quantity,
    invoice_totalPrice,
    invoice_createdAt,
    apt_id,
  } = useLocalSearchParams();
  console.log("invoice_title ~ ", invoice_title);
  const [cardInfo, setCardInfo] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [paypalUrl, setPaypalUrl] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const fetchCardDetail = (cardDetail) => {
    // console.log("my card details",cardDetail)
    if (cardDetail.complete) {
      setCardInfo(cardDetail);
    } else {
      setCardInfo(null);
    }
  };

  const onPressPaypal = async () => {
    setLoading(true);
    try {
      const token = await payPalApi.generateToken();
      const res = await payPalApi.createOrder(token, {
        name: invoice_title,
        description: invoice_title,
        quantity: invoice_quantity,
        unitAmount: invoice_unitPrice,
        amount: invoice_totalPrice,
      });
      setAccessToken(token);
      console.log("res++++++", res);
      setLoading(false);
      if (!!res?.links) {
        const findUrl = res.links.find((data) => data?.rel == "approve");
        setPaypalUrl(findUrl.href);
      }
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const onUrlChange = (webviewState) => {
    console.log("webviewState:", webviewState);

    const currentUrl = webviewState.url;

    if (currentUrl.includes("https://example.com/cancel")) {
      clearPaypalState();
      return;
    }

    if (currentUrl.includes("https://example.com/return")) {
      const [baseUrl, queryString] = currentUrl.split("?");
      const queryParams = qs.parse(queryString);

      console.log("Parsed query params:", queryParams);

      const { token } = queryParams;
      if (token) {
        paymentSucess(token);
      }
    }
  };

  const paymentSucess = async (id) => {
    try {
      const res = payPalApi.capturePayment(id, accessToken);
      await FetchApi.payInvoice(invoice_id);
      console.log("capturePayment res++++", res);
      Toast.show({ type: "success", text1: "Payment sucessfull...!!!" });
      clearPaypalState();
      router.push({pathname: '/(tabs_user)/myApt/myapt'})
      // navigation.goBack();
    } catch (error) {
      console.log("error raised in payment capture", error);
    }
  };

  const clearPaypalState = () => {
    setPaypalUrl(null);
    setAccessToken(null);
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        <XStack borderBottomWidth={1} borderBottomColor={"$grey"} py={10}>
          <Text fos={16} ff={"$bold"}>
            {invoice_title}
          </Text>
        </XStack>
        <XStack borderBottomWidth={1} borderBottomColor={"$grey"} py={10}>
          <Text fos={16} ff={"$bold"} flex={0.5}>
            Giá:{" "}
          </Text>
          <Text fos={16} flex={0.5}>
            {formatVND(invoice_unitPrice)}
          </Text>
        </XStack>
        <XStack borderBottomWidth={1} borderBottomColor={"$grey"} py={10}>
          <Text fos={16} ff={"$bold"} flex={0.5}>
            Số lượng:{" "}
          </Text>
          <Text fos={16} flex={0.5}>
            {invoice_quantity}
          </Text>
        </XStack>
        <XStack borderBottomWidth={1} borderBottomColor={"$grey"} py={10}>
          <Text fos={16} ff={"$bold"} flex={0.5}>
            Tổng hóa đơn:{" "}
          </Text>
          <Text fos={16} flex={0.5}>
            {formatVND(invoice_totalPrice)}
          </Text>
        </XStack>
        <AppButtonNormal isLoading={isLoading} mt={20} onPress={onPressPaypal}>
          Thanh toán ngay
        </AppButtonNormal>
      </ScrollView>
      <Modal visible={!!paypalUrl}>
        {/* <TouchableOpacity onPress={clearPaypalState} style={{ margin: 24 }}>
          <Text>Closed</Text>
        </TouchableOpacity> */}
        <View style={{ flex: 1 }}>
          <WebView
            source={{ uri: paypalUrl }}
            onNavigationStateChange={onUrlChange}
          />
        </View>
      </Modal>
    </View>
  );
}

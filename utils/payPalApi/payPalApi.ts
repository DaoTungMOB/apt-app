let baseUrl = "https://api-m.sandbox.paypal.com";
const base64 = require("base-64");

let clientId =
  "AS2fxXFJKgfCVbqzW4_47KcSJjdfEvp7TmwEunIs36TUYn5EIlY8MIyUvJCdtMRlkT-pZ4YGSA_tjH8g";
let secretKey =
  "EHleeZmg7PjD5Gy_qUWw5QOsWXkrFxGhJUZXs-zlW4rdkLMcEAQmXcdtqVltuXwHbYik-OZtSrMY-vZE";

type TOrderDetail = {
  quantity: number;
  name: string;
  description: string;
  unitAmount: number;
  amount: number;
};
async function getExchangeRate() {
  const response = await fetch(
    "https://api.exchangerate-api.com/v4/latest/VND"
  );
  const data = await response.json();
  return data.rates.USD; // Tỷ giá VND -> USD
}

async function orderDetail({
  amount,
  description,
  name,
  quantity,
  unitAmount,
}: TOrderDetail) {
  const exchangeRate = await getExchangeRate(); // Lấy tỷ giá động

  const convertedAmount = (amount * exchangeRate).toFixed(2);
  const convertedUnitAmount = (unitAmount * exchangeRate).toFixed(2);
  console.log('abc ~ ', unitAmount, amount, convertedAmount,convertedUnitAmount)
  console.log("hsdvbjshd ~ ", {
    intent: "CAPTURE",
    purchase_units: [
      {
        items: [
          {
            name,
            description,
            quantity: String(quantity),
            unit_amount: {
              currency_code: "USD",
              value: convertedUnitAmount,
            },
          },
        ],
        amount: {
          currency_code: "USD",
          value: convertedAmount,
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: convertedAmount,
            },
          },
        },
      },
    ],
    application_context: {
      return_url: "https://example.com/return",
      cancel_url: "https://example.com/cancel",
    },
  });
  return {
    intent: "CAPTURE",
    purchase_units: [
      {
        items: [
          {
            name,
            description,
            quantity: String(quantity),
            unit_amount: {
              currency_code: "USD",
              value: convertedUnitAmount,
            },
          },
        ],
        amount: {
          currency_code: "USD",
          value: convertedAmount,
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: convertedAmount,
            },
          },
        },
      },
    ],
    application_context: {
      return_url: "https://example.com/return",
      cancel_url: "https://example.com/cancel",
    },
  };
}

const generateToken = () => {
  var headers = new Headers();
  headers.append("Content-Type", "application/x-www-form-urlencoded");
  headers.append(
    "Authorization",
    "Basic " + base64.encode(`${clientId}:${secretKey}`)
  );

  var requestOptions = {
    method: "POST",
    headers: headers,
    body: "grant_type=client_credentials",
  };

  return new Promise((resolve, reject) => {
    fetch(baseUrl + "/v1/oauth2/token", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("result print", result);
        const { access_token } = JSON.parse(result);
        resolve(access_token);
      })
      .catch((error) => {
        console.log("error raised", error);
        reject(error);
      });
  });
};

const createOrder = async (token = "", data: TOrderDetail) => {
  const body = await orderDetail(data);
  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };

  return new Promise((resolve, reject) => {
    fetch(baseUrl + "/v2/checkout/orders", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("result print", result);
        const res = JSON.parse(result);
        resolve(res);
      })
      .catch((error) => {
        console.log("error raised", error);
        reject(error);
      });
  });
};

const capturePayment = (id: string, token = "") => {
  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return new Promise((resolve, reject) => {
    fetch(baseUrl + `/v2/checkout/orders/${id}/capture`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("result print", result);
        const res = JSON.parse(result);
        resolve(res);
      })
      .catch((error) => {
        console.log("error raised", error);
        reject(error);
      });
  });
};

export default {
  generateToken,
  createOrder,
  capturePayment,
};

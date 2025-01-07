import AsyncStorage from "@react-native-async-storage/async-storage";
import { TAccountResponse } from "../Fetchapi";
import { useEffect, useState } from "react";

const account_key_as = "account";

export const AccountService = {
  get: async () => {
    try {
      const value = await AsyncStorage.getItem(account_key_as);
      if (value !== null) {
        // value previously stored
        return JSON.parse(value) as TAccountResponse;
      }
      return;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  },
  set: async (value: TAccountResponse) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(account_key_as, jsonValue);
    } catch (e) {
      // saving error
      console.log(e);
    }
  },
  remove: async () => {
    try {
      await AsyncStorage.removeItem(account_key_as);
    } catch (e) {
      // remove error
      console.log(e);
    }

    console.log("Done.");
  },
};

export function useAppAccount() {
  const [account, setAccount] = useState<TAccountResponse>();
  useEffect(() => {
    (async () => {
      const data = await AccountService.get();
      setAccount(data);
    })();
  }, []);
  return account;
}

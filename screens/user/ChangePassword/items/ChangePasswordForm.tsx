import { ChangePasswordInput } from "./ChangePasswordInput";

export function ChangePasswordForm() {
  return (
    <>
      <ChangePasswordInput
        name="oldPassword"
        label="Mật khẩu cũ"
        placeholder="Mật khẩu cũ"
      />
      <ChangePasswordInput
        name="newPassword"
        label="Mật khẩu mới"
        placeholder="Mật khẩu mới"
      />
      <ChangePasswordInput
        name="confirmNewPassword"
        label="Xác nhận mật khẩu mới"
        placeholder="Xác nhận mật khẩu mới"
      />
    </>
  );
}

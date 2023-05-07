import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
//https://accounts.google.com/v3/signin/identifier?dsh=S-1140301204%3A1683408970727404&client_id=969892128102-vta5o95tfulnaf1a75ko9efgujdba4i2.apps.googleusercontent.com&code_challenge=40QrtQRYHK9qr_xsk-J-rdZUQwp0hqWor4A0IizpYfk&code_challenge_method=S256&o2v=2&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&response_type=code&scope=openid+email+profile&service=lso&state=eY1ed6w2F1rxGxAs8QLaXXLDRySaAct0Eat3DsaJ350&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAPv-vRPqjH5KxPu7CHzNo-lDWIyBtWtl2LyAGJDUBT7IHbrvnO_Zq0j7MXaxehnITApIQRYuxmcBwmwF4CVMplx5ZKvAZxdBqjGzPq8vfq2vEc_PD8u64kQyK8EfTueQ-py2_BG1IgX52zSJGfLfwVMV529p4mbMCqzQGeDBZuhhF1bjJ6XSp5sKf5wEzauWdNsQCopV692B3V6t_N_R8Ws7RUbL_ZOPzR-6x0z4LFeM7-GIf6njxvrCG8lI4ZwMgYlUdm0Rj75MWsMDNmKfXzzjYUIs3HTOnKtn3A93v2Ll74qolAaq092EtZIBJqGvZl7tGHQP3-tEC4Ji-AEh3DqaXT5AJ6mueJ_H5OtRVtRMeiZG_uGT4XiAJOD448VYlgKYwAPy-y90K1IuAAZra3YypxHNio-j5yWm2TeafOhKwnGaWopvtgWyz9NhkyvBzpMWOkecBCNXJkxPN4RDTDkEJ6TUA%26as%3DS-1140301204%253A1683408970727404%26client_id%3D969892128102-vta5o95tfulnaf1a75ko9efgujdba4i2.apps.googleusercontent.com%23&app_domain=http%3A%2F%2Flocalhost%3A3000&rart=ANgoxcd9kI-aXAovnUHQ9aWXsUev9-bCvXIjhZaE58pn3ZARyBfjtRrSQnlcEiZLZDADC0qDljDN_8cV8ix_Fm2r1ww7h0GasAn

export class PorOneService {
  static async doIdentityVertification(data: any) {
    IMP.certification(data, function (rsp: any) {
      // callback
      if (rsp.success) {
        // true를 내뱉어줌. 인증성공하고 나면 처리할 코드를 입력하면 된다.
      } else {
        console.log("실패");
      }
    });
  }

  static async doRequestPay(params: any) {
    IMP.request_pay(params, (rsp: any) => {
      if (rsp.success) {
        console.log(rsp.success);
      } else {
        console.log("pay 실패" + rsp);
      }
    });
  }
}

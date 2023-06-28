const { IMP } = window;
IMP.init("imp84326881");

export class PorOneService {
  static async doIdentityVertification(data: any) {
    IMP.certification(data, function (rsp: any) {
      // callback
      if (rsp.success) {
        console.log(rsp);
      } else {
        console.log("실패");
      }
    });
  }

  static async doRequestPay(params: any) {
    if (!window.IMP) return;
    IMP.request_pay(params, (rsp: any) => {
      if (rsp.success) {
        console.log(rsp.success);
      } else {
        console.log("pay 실패" + rsp);
      }
    });
  }
}

import BasicRequest from "../request/request";
import AxiosConfigs from "../request/config";

import type { ITestParam, ITestData } from "@/interface/api/common"; // 引入自己封装的接口类型

const requestToken = new BasicRequest({
  baseURL: AxiosConfigs.basicUrl,
  timeout: AxiosConfigs.timeout
});

class CommonAPI {
  test(params: ITestParam): Promise<ITestData> {
    return requestToken.get<ITestData>({
      url: "/getconfig/sodar?sv=200&tid=gda&tv=r20231130&st=env",
      params: params
    });
  }
}
export default new CommonAPI();

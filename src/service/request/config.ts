// 根据process.env.NODE_ENV的值区分不同环境
// 开发环境：development;生产环境：production;测试环境：test
interface IAxiosBasicConfig {
  basicUrl: string;
  timeout: number;
  fileUrl?: string;
  fileTimeout?: number;
}

const BASIC_TIME_OUT = 60000;

let currentConfig: IAxiosBasicConfig = {
  // 基本请求配置
  basicUrl: "",
  timeout: BASIC_TIME_OUT
};

// 开发环境
const developmentConfig = {
  // 基本请求配置
  basicUrl: "https://pagead2.googlesyndication.com",
  timeout: BASIC_TIME_OUT,

  // 附件请求配置
  fileUrl: "https://pagead2.googlesyndication.com",
  fileTimeout: 10000
};

// 生产环境
const productionConfig = {
  // 基本请求配置
  basicUrl: "https://pagead2.googlesyndication.com",
  timeout: BASIC_TIME_OUT,

  // 附件请求配置
  fileUrl: "https://pagead2.googlesyndication.com",
  fileTimeout: 10000
};

// 测试环境
const testConfig = {
  // 基本请求配置
  basicUrl: "https://pagead2.googlesyndication.com",
  timeout: BASIC_TIME_OUT,

  // 附件请求配置
  fileUrl: "https://pagead2.googlesyndication.com",
  fileTimeout: BASIC_TIME_OUT
};

if (process.env.NODE_ENV === "development") {
  currentConfig = developmentConfig;
} else if (process.env.NODE_ENV === "production") {
  currentConfig = productionConfig;
} else if (process.env.NODE_ENV === "test") {
  currentConfig = testConfig;
} else {
  currentConfig = developmentConfig;
}

export default currentConfig;

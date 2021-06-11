import request from "@/utils/request";
export const getLogin = (params) => {
  return request({
    url: "/api/login",
    method: "get",
    params
  });
};

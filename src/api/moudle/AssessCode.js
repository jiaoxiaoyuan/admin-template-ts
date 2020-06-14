import { postHttp } from "../ajaxData";
// 用户测评token
export function Assesstoken(params) {
  return postHttp({
    url: "/answer/use/AssessCode",
    data: params,
    isload: true,
  });
}
// 测评答题
export function submitAssess(params) {
  const token = JSON.parse(localStorage.getItem("AssessInfo")).token;
  return postHttp({
    url: "/answer/assess/submitAssess?token=" + token,
    data: params,
    isload: true,
  });
}

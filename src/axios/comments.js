import axios from 'axios';

const commentsAxios = axios.create({
  baseURL: 'http://localhost:3004/comments/'
});

// request 인터셉터 정의
commentsAxios.interceptors.request.use(async (config) => {
    // 로그인이 필요한 api이므로 토큰 존재여부 체크
  const accessToken = localStorage.getItem("accessToken");
  // 존재하면 다음으로
  // 존재하지 않으면 서버에 보낼필요 x -> 오류 발생시키면 됨
if(!accessToken) {
  alert("토큰이 존재하지 않습니다.")
  return Promise.reject("토큰이 존재하지 않습니다.")
}
  // 토큰 유효성 검증 (to server)

const { data } = await axios.get('https://moneyfulpublicpolicy.co.kr/user', {
  header: {
    "Content-Type": "application/json",
    Authorization: `bearer ${accessToken}`
  }
})

// console.log("data", data) 
if(data.success === true) {
  return config;
} else {
  alert("검증이 실패하였습니다.")
  return Promise.reject("검증이 실패하였습니다.")
}

  // 유효성 검증이 성공하면 계속 진행
  // 유효성검증 실패시 오류를 발생시켜야함
  return config;
}, () => {

});


export default commentsAxios;

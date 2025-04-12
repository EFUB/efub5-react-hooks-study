import defaultAxios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';
import { useEffect, useState } from 'react';

interface AxiosState<T> {
  loading: boolean;
  error: AxiosError | null;
  data: T | null;
}

type UseAxiosReturn<T> = AxiosState<T> & { refetch: () => void };

export const useAxios = <T>(
  opts: AxiosRequestConfig,
  axiosInstance: AxiosInstance = defaultAxios
): UseAxiosReturn<T> => {
  //* 함수가 반환하는 데이터 타입을 제너릭으로 유연하게 설정하기
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (!opts.url) {
      return;
    }
    axiosInstance(opts)
      .then((data) => {
        setState({ ...state, loading: false, data: data.data });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

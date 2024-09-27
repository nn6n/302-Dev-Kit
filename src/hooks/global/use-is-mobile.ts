import { useEffect, useState } from "react";

// 定义一个阈值，当窗口宽度小于这个值时，认为是移动设备
const MOBILE_THRESHOLD = 768;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_THRESHOLD
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_THRESHOLD);
    };

    // 监听窗口尺寸变化事件
    window.addEventListener("resize", handleResize);

    // 组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;

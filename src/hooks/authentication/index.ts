import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  code: z.string().optional(),
  remember: z.boolean().optional(),
});

const useAuth = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const { watch, register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      code: '', // 默认值为空
      remember: false, // 设置默认值为false
    },
    resolver: zodResolver(schema),
  });

  const performAuth = async (code: string, remember: boolean) => {
    try {
      setIsPending(true);
      // 模拟登录验证
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 成功跳转主页 并且 去除链接参数
      if (remember) {
        localStorage.setItem('code', code);
      }
      router.replace('/'); // 跳转并且清除query
    } catch (err) {
      console.error(err);
    } finally {
      setIsPending(false);
    }
  };

  const onSubmit = async (data: any) => {
    console.log('data::', data)
    const { code, remember } = data;
    await performAuth(code, remember);
  };

  return { isPending, setValue, onAuth: handleSubmit(onSubmit), watch, register, errors };
}

export default useAuth;

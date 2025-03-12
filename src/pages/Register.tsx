
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <MainLayout>
      <div className="container-custom py-20 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 border border-border">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">إنشاء حساب جديد</h1>
            <p className="text-muted-foreground">سجل الآن للوصول إلى كافة خدمات مركز السيارات السوري</p>
          </div>
          
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">الاسم الكامل</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="أدخل اسمك الكامل"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">البريد الإلكتروني</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">كلمة المرور</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="أدخل كلمة المرور"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium">تأكيد كلمة المرور</label>
              <input 
                type="password" 
                id="confirmPassword" 
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="أعد إدخال كلمة المرور"
              />
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="terms" 
                className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="terms" className="mr-2 block text-sm text-gray-700">
                أوافق على <Link to="/terms" className="text-primary hover:underline">الشروط والأحكام</Link> و <Link to="/privacy" className="text-primary hover:underline">سياسة الخصوصية</Link>
              </label>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              تسجيل
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;

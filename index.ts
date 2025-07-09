{
  "$schema" : "node_modules/wrangler/config-schema.json" ,
  "نام" : "نام کارگر" ,
  "اصلی" : "src/index.ts" ,
  "تاریخ_سازگاری" : "2025-02-04" ,
  "مشاهده‌پذیری" : {
    "فعال" : درست
  }،
  // این را به wrangler.jsonc خود اضافه کنید
  "kv_namespaces" : [
    {
      "اتصال" : "KV" ,
      "شناسه" : "54df67fe2bc74ad088ac5069ce27c662" ,
      
      // اختیاری: preview_id هنگام اجرای `wrangler dev` برای توسعه محلی استفاده می‌شود
      "preview_id" : "<ID_OF_PREVIEW_KV_NAMESPACE_FOR_LOCAL_DEVELOPMENT>"
    }
  ]
}

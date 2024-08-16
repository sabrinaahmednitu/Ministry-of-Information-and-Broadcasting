import React from 'react';

const InternalEService = () => {
    return (
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-8 w-[90%]">
        {/* অভ্যন্তরীণ ই-সেবাসমূহ Section */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6 ">
          <h1 className="text-[#4A5568] text-2xl font-semibold mb-4 border-b pb-2">
            অভ্যন্তরীণ ই-সেবাসমূহ
          </h1>
          <div className="p-6 flex flex-col">
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                বিদেশী চলচ্চিত্র আমদানির অনাপত্তি প্রদান।
              </li>
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                বেসরকারি মালিকানাধীন এফ এম বেতার কেন্দ্রের লাইসেন্স নবায়ন
              </li>
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                অনলাইন আবেদন (বাংলাদেশ চলচ্চিত্র সেন্সর বোর্ড)
              </li>
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                পরীক্ষণ ফি ও স্ক্রিনিং ফি এর জন্য ক্যালকুলেটর
              </li>
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                ওয়েব মেইল
              </li>
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                অনলাইন ক্যাটলগিং (বাংলাদেশ ফিল্ম আর্কাইভ)
              </li>
            </ul>
          </div>
        </div>
        {/* গুরুত্বপূর্ণ লিংক Section */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6">
          <h1 className="text-[#4A5568] text-2xl font-semibold mb-4 border-b pb-2">
            গুরুত্বপূর্ণ লিংক
          </h1>
          <div className="p-6 flex flex-col">
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                রাষ্ট্রপতির কার্যালয়
              </li>
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                মন্ত্রিপরিষদ বিভাগ
              </li>
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                জনপ্রশাসন মন্ত্রণালয়
              </li>
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                জাতীয় তথ্য বাতায়ন
              </li>
            </ul>
          </div>
        </div>
        {/* ইনোভেশন কর্নার Section */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6">
          <h1 className="text-[#4A5568] text-2xl font-semibold mb-4 border-b pb-2">
            ইনোভেশন কর্নার
          </h1>
          <div className="p-6 flex flex-col">
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                ইনোভেশন টিম
              </li>
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                ইনোভেশন টিমের বার্ষিক কর্ম-পরিকল্পনা
              </li>
              <li className="flex items-start text-[14px]">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i class="fa-solid fa-pencil text-[#c198c4]"></i>
                </span>
                অগ্রগতি প্রতিবেদন
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default InternalEService;
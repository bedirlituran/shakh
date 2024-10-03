const AboutUs = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Haqqımızda</h1>
            <p className="mt-4 text-gray-600">
              Bizim hikayemiz, müştərilərimizə ən yaxşı xidməti təqdim etmək üçün başladığımız bir yolculuqdur.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Şirketimiz Hakkında */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Şirkətimiz</h2>
              <p className="mt-4 text-gray-600">
                2010-cu ildən fəaliyyət göstərən şirkətimiz, texnologiya və innovasiyanın gücündən istifadə edərək müştərilərinə həllər təqdim edir. 
                Məqsədimiz, hər addımda müştərilərimizə dəyər qatmaqdır.
              </p>
            </div>
  
            {/* Misyonumuz */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Missiyamız</h2>
              <p className="mt-4 text-gray-600">
                Müştərilərimizə ən yüksək keyfiyyətdə xidmət və məhsul təqdim edərək, onların həyatını asanlaşdırmaq üçün çalışırıq. 
                Davamlı inkişaf və yenilik bizim üçün hər zaman prioritetdir.
              </p>
            </div>
  
            {/* Vizyonumuz */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Vizyonumuz</h2>
              <p className="mt-4 text-gray-600">
                Qlobal bazarda lider bir şirkət olaraq, sektordakı yeniliklərə öncülük etmək və davamlı həllər təqdim etmək vizyonumuzun əsas daşıdır.
              </p>
            </div>
  
            {/* Değerlerimiz */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Dəyərlərimiz</h2>
              <p className="mt-4 text-gray-600">
                Dürüstlük, etibar, müştəri məmnuniyyəti və davamlılıq, iş metodlarımızın ayrılmaz dəyərləridir. 
                Hər zaman müştərilərimizə ən yaxşısını təqdim etməyi hədəfləyirik.
              </p>
            </div>
          </div>
  
          {/* Sosial Sorumluluk Projeleri */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Sosial  Layihələrimiz</h2>
            <p className="mt-4 text-gray-600 text-center">
              Biz, cəmiyyətimizə fayda vermək üçün bir sıra sosial məsuliyyət layihələrini dəstəkləyirik. 
              Bunlardan bəziləri aşağıdakılardır:
            </p>
            <ul className="mt-6 space-y-4">
              <li className="bg-white p-4 shadow-lg rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">Təhsil Layihələri</h3>
                <p className="text-gray-600">Gənclərin təhsil imkanlarını artırmaq üçün müxtəlif təşəbbüslərimiz var.</p>
              </li>
              <li className="bg-white p-4 shadow-lg rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">Ekoloji Layihələr</h3>
                <p className="text-gray-600">Təbii mühitin qorunması üçün ekoloji layihələr həyata keçiririk.</p>
              </li>
              <li className="bg-white p-4 shadow-lg rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">İctimai Xidmətlər</h3>
                <p className="text-gray-600">Müxtəlif sosial yardım proqramları ilə cəmiyyətimizə dəstək oluruq.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  
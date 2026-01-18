import Link from 'next/link';
import { 
  Calculator, 
  TrendingDown, 
  Bot, 
  CloudSun,
  ShoppingCart,
  Clock,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export default function AIPlatformPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI palīgs būvniecībai – ietaupi laiku un naudu
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Salīdzini cenas, aprēķini materiālus un optimizē būvniecības izmaksas ar mākslīgā intelekta palīdzību.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://t.me/BuvcenuGurubot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <Bot className="w-6 h-6" />
              Sākt bez maksas
            </a>
            
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-all"
            >
              Uzzināt vairāk
            </button>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Pazīstamas problēmas? Mums ir risinājums!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">❌ Problēma</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Laika ieguldījums cenu salīdzināšanā starp veikaliem</li>
                <li>• Neskaidrība par materiālu daudzumu projektam</li>
                <li>• Pārmaksāšana par materiāliem</li>
                <li>• Grūtības aprēķināt darba izmaksas</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">✅ Risinājums</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>BūvcenuGuru</strong> ar AI tehnoloģiju automātiski salīdzina cenas no 10+ veikaliem, 
                aprēķina nepieciešamo materiālu daudzumu un palīdz optimizēt būvniecības izmaksas. 
                Viss pieejams caur vienkāršu Telegram botu – bez reģistrācijas, bez maksas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Ko piedāvā BūvcenuGuru?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Cenu salīdzināšana</h3>
              <p className="text-gray-700 mb-2">
                <strong>2092+ produkti</strong> no vairāk nekā 10 būvmateriālu veikaliem
              </p>
              <p className="text-sm text-gray-600">
                Atrodi labāko cenu vienā vietā bez meklēšanas čakarēšanās
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">AI materiālu kalkulators</h3>
              <p className="text-gray-700 mb-2">
                Ievadi projekta parametrus un saņem precīzu materiālu sarakstu
              </p>
              <p className="text-sm text-gray-600">
                Izvairies no pārmaksas vai materiālu trūkuma
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Darba izmaksu kalkulators</h3>
              <p className="text-gray-700 mb-2">
                <strong>200+ darba veidi</strong> ar vidējām tirgus cenām
              </p>
              <p className="text-sm text-gray-600">
                Plāno budžetu un salīdzini piedāvājumus
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-purple-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <CloudSun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Laika prognozes būvniekiem</h3>
              <p className="text-gray-700 mb-2">
                Precīzas laika prognozes būvlaukumam
              </p>
              <p className="text-sm text-gray-600">
                Plāno darbus un izvairies no laikapstākļu pārsteigumiem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            BūvcenuGuru skaitļos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl font-bold text-orange-600 mb-2">1000+</div>
              <p className="text-gray-700 font-semibold">Aktīvi lietotāji</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl font-bold text-orange-600 mb-2">10+</div>
              <p className="text-gray-700 font-semibold">Būvmateriālu veikali</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl font-bold text-orange-600 mb-2">200+</div>
              <p className="text-gray-700 font-semibold">Darba veidi kalkulatorā</p>
            </div>
          </div>
          
          <p className="mt-8 text-gray-600 italic">
            Atsauksmes un partneru logotipi drīzumā...
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Par BūvcenuGuru
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-lg leading-relaxed">
              <strong>BūvcenuGuru</strong> ir moderna AI platformā, kas palīdz būvniekiem, 
              remontētājiem un mājas saimniekiem ietaupīt laiku un naudu būvmateriālu 
              iegādē un projektu plānošanā.
            </p>
            
            <p className="text-lg leading-relaxed">
              Mūsu mērķis ir kļūt par <strong>#1 būvniecības palīgu Baltijā</strong>, 
              automatizējot ikdienas procesus un sniedzot piekļuvi tirgus datiem, 
              kas palīdz pieņemt labākus lēmumus.
            </p>
            
            <p className="text-lg leading-relaxed">
              Izmantojot mākslīgā intelekta tehnoloģijas, mēs apkopojam informāciju 
              no vairākiem avotiem un sniedzam to ērtā, saprotamā veidā tieši 
              Telegram lietotnē – bez sarežģītas reģistrācijas vai lietotnes instalēšanas.
            </p>
          </div>
        </div>
      </section>

      {/* AI Implementation Services */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-orange-400" />
          <h2 className="text-4xl font-bold mb-6">
            AI tehnoloģiju ieviešana jūsu biznesam
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Palīdzam uzņēmumiem ieviest mākslīgā intelekta risinājumus – 
            no chatbotiem līdz datu analīzes sistēmām. Konsultācijas, izstrāde un integrācija.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all"
          >
            Sazināties par AI ieviešanu
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Biežāk uzdotie jautājumi
          </h2>
          
          <div className="space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Vai tas ir bez maksas?
              </summary>
              <p className="mt-4 text-gray-700 pl-7">
                Jā! BūvcenuGuru pamata funkcijas ir pilnīgi bezmaksas. Telegram bots, 
                cenu salīdzināšana un kalkulatori pieejami ikvienam bez maksas.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Kā strādā Telegram bots?
              </summary>
              <p className="mt-4 text-gray-700 pl-7">
                Vienkārši atver Telegram un meklē <strong>@BuvcenuGurubot</strong>. 
                Nosūti ziņu ar produktu nosaukumu vai izmanto komandas, lai piekļūtu kalkulatoriem. 
                Bots atbildēs ar aktuālo informāciju dažu sekunžu laikā.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Vai mani dati ir droši?
              </summary>
              <p className="mt-4 text-gray-700 pl-7">
                Jā! Mēs neglabājam personas datus. Telegram bots apstrādā tikai tavus vaicājumus 
                un neko nesaglabā. Visi dati tiek šifrēti un droši apstrādāti.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                No kurienes nāk cenu dati?
              </summary>
              <p className="mt-4 text-gray-700 pl-7">
                Mēs apkopojam cenu informāciju no vairāk nekā 10 būvmateriālu veikaliem Latvijā, 
                regulāri atjauninot datus. Cenas ir orientējošas un var mainīties – vienmēr pārbaudi 
                aktuālo cenu veikalā pirms pirkuma.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-bold text-lg cursor-pointer text-gray-800 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Vai ir pieejams arī citās valodās?
              </summary>
              <p className="mt-4 text-gray-700 pl-7">
                Šobrīd BūvcenuGuru darbojas latviešu valodā. Krievu un angļu valodas atbalsts 
                ir plānots nākotnē.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gatavs sākt ietaupīt?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Pievienojies 1000+ lietotājiem, kas jau izmanto BūvcenuGuru AI platformu
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="https://t.me/BuvcenuGurubot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <Bot className="w-6 h-6" />
              Sākt ar @BuvcenuGurubot
            </a>
            
            <a 
              href="https://t.me/BuvsagadesGurubot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <Bot className="w-6 h-6" />
              @BuvsagadesGurubot
            </a>
          </div>
          
          <div className="mt-8 space-y-2 text-sm opacity-90">
            <p>📧 E-pasts: <a href="mailto:info@buvcenuguru.lv" className="underline hover:text-orange-200">info@buvcenuguru.lv</a></p>
            <p>💬 Telegram: <a href="https://t.me/BuvcenuGuru" className="underline hover:text-orange-200">@BuvcenuGuru</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
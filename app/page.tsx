export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="section bg-gradient-to-br from-secondary to-secondary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">
              Profesionāla Būvniecība
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Kvalitatīvi būvniecības pakalpojumi Latvijā
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary text-lg">
                Sazināties
              </button>
              <button className="btn btn-outline text-lg border-white text-white hover:bg-white hover:text-secondary">
                Uzzināt vairāk
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center mb-12 text-secondary">
            Mūsu Pakalpojumi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Jaunbūves', 'Renovācija', 'Projektēšana'].map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg mb-4"></div>
                <h3 className="mb-3 text-secondary">{service}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="mb-6 text-secondary">Gatavs Sākt Projektu?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums šodien un saņemiet bezmaksas konsultāciju!
          </p>
          <button className="btn btn-primary text-lg">
            Sazināties Tagad
          </button>
        </div>
      </section>
    </main>
  );
}

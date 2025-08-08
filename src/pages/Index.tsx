import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Заявка отправлена:', formData)
  }

  const equipment = [
    {
      title: "Лазерная терапия",
      description: "Профессиональное лазерное оборудование для косметологических процедур",
      certifications: ["ISO 13485", "CE Mark", "FDA Approved"],
      features: ["Безопасность пациентов", "Высокая эффективность", "Многофункциональность"]
    },
    {
      title: "RF-лифтинг аппараты", 
      description: "Современные системы радиочастотного омоложения кожи",
      certifications: ["Medical CE", "ISO 9001", "Роспотребнадзор"],
      features: ["Неинвазивные процедуры", "Быстрые результаты", "Минимальные побочные эффекты"]
    },
    {
      title: "Аппараты для инъекций",
      description: "Высокоточное оборудование для косметологических инъекций",
      certifications: ["GMP", "ISO 14971", "Medical Device Directive"],
      features: ["Точная дозировка", "Стерильность", "Комфорт пациентов"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white font-roboto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-medical-blue/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Activity" className="text-medical-blue" size={32} />
            <h1 className="text-2xl font-bold text-medical-blue">МедКосмет</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#equipment" className="text-medical-gray hover:text-medical-blue transition-colors">Оборудование</a>
            <a href="#order" className="text-medical-gray hover:text-medical-blue transition-colors">Заказать</a>
            <a href="#contacts" className="text-medical-gray hover:text-medical-blue transition-colors">Контакты</a>
          </nav>
          <Button className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-medical-blue to-medical-blue-light text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Профессиональное косметологическое оборудование
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Сертифицированные медицинские аппараты с полным пакетом разрешительной документации
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
                <Icon name="ShieldCheck" className="mr-2" size={20} />
                ISO 13485
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
                <Icon name="Award" className="mr-2" size={20} />
                CE Mark
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
                <Icon name="CheckCircle" className="mr-2" size={20} />
                FDA Approved
              </Badge>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-medical-blue hover:bg-medical-gray-light text-xl px-8 py-4 animate-scale-in"
              style={{animationDelay: '0.6s'}}
            >
              <Icon name="Phone" className="mr-2" size={24} />
              Получить консультацию
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medical-gray-dark mb-6">
              Наше оборудование
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Все аппараты имеют необходимые медицинские сертификаты и разрешения для использования в косметологических клиниках
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-medical-blue/10 hover:border-medical-blue/30">
                <CardHeader>
                  <div className="w-full h-48 bg-medical-gray-light rounded-lg mb-4 relative overflow-hidden">
                    <img 
                      src="/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg" 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-medical-blue text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-medical-gray">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-medical-gray-dark mb-2 flex items-center">
                      <Icon name="Award" className="mr-2 text-medical-green" size={18} />
                      Сертификации
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="outline" className="border-medical-green text-medical-green">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-medical-gray-dark mb-2 flex items-center">
                      <Icon name="CheckCircle" className="mr-2 text-medical-blue" size={18} />
                      Преимущества
                    </h4>
                    <ul className="space-y-1">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-medical-gray flex items-center">
                          <Icon name="Dot" className="mr-1 text-medical-blue" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-medical-gray-light rounded-xl p-8 text-center">
            <Icon name="FileText" className="mx-auto mb-4 text-medical-blue" size={48} />
            <h3 className="text-2xl font-bold text-medical-gray-dark mb-4">
              Полный пакет документов
            </h3>
            <p className="text-medical-gray mb-6 max-w-2xl mx-auto">
              К каждому аппарату прилагается полный комплект сертификатов, разрешений и документации для быстрого ввода в эксплуатацию
            </p>
            <div className="flex justify-center">
              <img 
                src="/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg" 
                alt="Медицинские сертификаты" 
                className="max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-20 bg-gradient-to-b from-medical-blue/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-medical-gray-dark mb-6">
                Заказать оборудование
              </h2>
              <p className="text-xl text-medical-gray">
                Оставьте заявку и наш специалист свяжется с вами для консультации
              </p>
            </div>

            <Card className="shadow-xl border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue flex items-center">
                  <Icon name="MessageSquare" className="mr-3" size={28} />
                  Форма заявки
                </CardTitle>
                <CardDescription>
                  Заполните форму ниже, и мы подберем оптимальное решение для вашей клиники
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input 
                        id="name" 
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-medical-blue/30 focus:border-medical-blue"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-medical-blue/30 focus:border-medical-blue"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-medical-blue/30 focus:border-medical-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Опишите какое оборудование вас интересует..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-medical-blue/30 focus:border-medical-blue"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark text-lg py-3"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-medical-gray-dark mb-6">
              Контакты
            </h2>
            <p className="text-xl text-medical-gray">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 border-medical-blue/20 hover:shadow-lg transition-shadow">
              <Icon name="Phone" className="mx-auto mb-4 text-medical-blue" size={40} />
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Телефон</h3>
              <p className="text-medical-blue font-semibold text-lg">+7 (495) 123-45-67</p>
              <p className="text-medical-gray text-sm mt-1">Ежедневно 9:00-21:00</p>
            </Card>

            <Card className="text-center p-6 border-medical-blue/20 hover:shadow-lg transition-shadow">
              <Icon name="Mail" className="mx-auto mb-4 text-medical-blue" size={40} />
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Email</h3>
              <p className="text-medical-blue font-semibold text-lg">info@medkosmet.ru</p>
              <p className="text-medical-gray text-sm mt-1">Ответим в течение часа</p>
            </Card>

            <Card className="text-center p-6 border-medical-blue/20 hover:shadow-lg transition-shadow">
              <Icon name="MapPin" className="mx-auto mb-4 text-medical-blue" size={40} />
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Адрес</h3>
              <p className="text-medical-blue font-semibold">Москва, ул. Тверская, 15</p>
              <p className="text-medical-gray text-sm mt-1">Офис 301, 3 этаж</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-gray-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <Icon name="Activity" className="text-medical-blue" size={32} />
              <h3 className="text-2xl font-bold">МедКосмет</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Профессиональное косметологическое оборудование с полным пакетом сертификации
            </p>
            <div className="border-t border-gray-600 pt-6">
              <p className="text-gray-400 text-sm">
                © 2024 МедКосмет. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
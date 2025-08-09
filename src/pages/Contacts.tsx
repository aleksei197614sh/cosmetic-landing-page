import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Сообщение отправлено:', formData)
  }

  const offices = [
    {
      city: "Москва",
      address: "ул. Тверская, 15, офис 301",
      phone: "+7 (495) 123-45-67",
      email: "moscow@medkosmet.ru",
      hours: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00",
      isMain: true
    },
    {
      city: "Санкт-Петербург",
      address: "Невский проспект, 28, офис 205",
      phone: "+7 (812) 987-65-43",
      email: "spb@medkosmet.ru",
      hours: "Пн-Пт: 9:00-18:00",
      isMain: false
    },
    {
      city: "Екатеринбург",
      address: "ул. Ленина, 52, офис 410",
      phone: "+7 (343) 555-12-34",
      email: "ekb@medkosmet.ru",
      hours: "Пн-Пт: 9:00-18:00",
      isMain: false
    },
    {
      city: "Новосибирск",
      address: "Красный проспект, 35, офис 120",
      phone: "+7 (383) 444-56-78",
      email: "nsk@medkosmet.ru",
      hours: "Пн-Пт: 9:00-18:00",
      isMain: false
    }
  ]

  const contactMethods = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Звоните ежедневно с 9:00 до 21:00",
      action: "Позвонить"
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@medkosmet.ru",
      description: "Ответим в течение часа",
      action: "Написать"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      value: "+7 (495) 123-45-67",
      description: "Быстрые ответы в мессенджере",
      action: "Написать"
    },
    {
      icon: "Send",
      title: "Telegram",
      value: "@medkosmet_support",
      description: "Техническая поддержка 24/7",
      action: "Написать"
    }
  ]

  const departments = [
    { value: "sales", label: "Отдел продаж" },
    { value: "service", label: "Сервисная служба" },
    { value: "support", label: "Техническая поддержка" },
    { value: "training", label: "Обучение" },
    { value: "finance", label: "Финансовый отдел" },
    { value: "other", label: "Другое" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-xl opacity-90">Свяжитесь с нами любым удобным способом</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center p-6 border-medical-blue/20 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <Icon name={method.icon} className="mx-auto mb-4 text-medical-blue group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">{method.title}</h3>
              <p className="text-medical-blue font-semibold mb-2">{method.value}</p>
              <p className="text-sm text-medical-gray mb-4">{method.description}</p>
              <Button size="sm" className="bg-medical-blue hover:bg-medical-blue-dark">
                {method.action}
              </Button>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue flex items-center">
                  <Icon name="MessageSquare" className="mr-3" size={28} />
                  Написать нам
                </CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input 
                        id="name" 
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема обращения</Label>
                    <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите отдел" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map(dept => (
                          <SelectItem key={dept.value} value={dept.value}>
                            {dept.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Опишите ваш вопрос или запрос..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Offices */}
          <div>
            <h2 className="text-2xl font-bold text-medical-gray-dark mb-6">Наши офисы</h2>
            <div className="space-y-6">
              {offices.map((office, index) => (
                <Card key={index} className={`border-medical-blue/20 ${office.isMain ? 'ring-2 ring-medical-blue/20' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-medical-blue flex items-center">
                        <Icon name="MapPin" className="mr-2" size={20} />
                        {office.city}
                      </CardTitle>
                      {office.isMain && (
                        <span className="bg-medical-blue text-white px-2 py-1 rounded text-xs">
                          Главный офис
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <Icon name="MapPin" className="mr-2 mt-1 text-medical-gray" size={16} />
                      <span className="text-medical-gray">{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Phone" className="mr-2 text-medical-gray" size={16} />
                      <span className="text-medical-blue font-semibold">{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Mail" className="mr-2 text-medical-gray" size={16} />
                      <span className="text-medical-blue">{office.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" className="mr-2 text-medical-gray" size={16} />
                      <span className="text-medical-gray">{office.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map placeholder */}
            <Card className="mt-6 border-medical-blue/20">
              <CardContent className="p-0">
                <div className="h-64 bg-medical-gray-light rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" className="mx-auto mb-2 text-medical-gray" size={48} />
                    <p className="text-medical-gray">Интерактивная карта</p>
                    <p className="text-sm text-medical-gray">Все наши офисы на карте</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue">Как быстро вы отвечаете на запросы?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">
                  Мы отвечаем на все запросы в течение 1 часа в рабочее время. 
                  Срочные вопросы можете задать по телефону или в WhatsApp.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue">Работаете ли вы в выходные?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">
                  Наша техническая поддержка работает 24/7. Отдел продаж работает 
                  в будние дни с 9:00 до 18:00, в субботу с 10:00 до 16:00.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue">Можно ли получить консультацию онлайн?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">
                  Да, мы проводим онлайн-консультации по видеосвязи. 
                  Запишитесь на удобное время через форму или по телефону.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue">Есть ли у вас представители в регионах?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">
                  У нас есть офисы в 4 городах России и сеть партнеров в других регионах. 
                  Уточните наличие представителя в вашем городе.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
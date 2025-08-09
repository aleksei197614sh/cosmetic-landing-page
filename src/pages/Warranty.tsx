import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Warranty = () => {
  const [warrantyForm, setWarrantyForm] = useState({
    serialNumber: '',
    model: '',
    purchaseDate: '',
    clientName: '',
    email: '',
    phone: '',
    issueDescription: ''
  })

  const [checkForm, setCheckForm] = useState({
    serialNumber: '',
    model: ''
  })

  const handleWarrantySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Гарантийная заявка отправлена:', warrantyForm)
  }

  const handleCheckSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Проверка гарантии:', checkForm)
  }

  const warrantyPrograms = [
    {
      title: "Стандартная гарантия",
      duration: "12 месяцев",
      coverage: "Производственные дефекты",
      price: "Бесплатно",
      features: [
        "Бесплатный ремонт",
        "Замена неисправных деталей",
        "Техническая поддержка",
        "Выездной сервис"
      ],
      icon: "Shield",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Расширенная гарантия",
      duration: "24 месяца",
      coverage: "Все виды неисправностей",
      price: "от 50 000 ₽",
      features: [
        "Все услуги стандартной гарантии",
        "Покрытие износа деталей",
        "Приоритетное обслуживание",
        "Профилактическое ТО"
      ],
      icon: "ShieldCheck",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Премиум гарантия",
      duration: "36 месяцев",
      coverage: "Полное покрытие + сервис",
      price: "от 100 000 ₽",
      features: [
        "Все услуги расширенной гарантии",
        "Замена оборудования на время ремонта",
        "Обучение персонала",
        "Консультации экспертов"
      ],
      icon: "Crown",
      color: "bg-purple-100 text-purple-800"
    }
  ]

  const warrantySteps = [
    {
      step: 1,
      title: "Обращение",
      description: "Подача заявки через сайт, телефон или email",
      icon: "Phone"
    },
    {
      step: 2,
      title: "Диагностика",
      description: "Удаленная или выездная диагностика неисправности",
      icon: "Search"
    },
    {
      step: 3,
      title: "Ремонт",
      description: "Выполнение ремонтных работ сертифицированными специалистами",
      icon: "Wrench"
    },
    {
      step: 4,
      title: "Тестирование",
      description: "Проверка работоспособности и передача клиенту",
      icon: "CheckCircle"
    }
  ]

  const commonIssues = [
    {
      issue: "Оборудование не включается",
      solution: "Проверка питания, предохранителей, диагностика блока питания",
      timeframe: "1-2 дня",
      covered: true
    },
    {
      issue: "Снижение мощности лазера",
      solution: "Замена лазерного диода, калибровка системы",
      timeframe: "3-5 дней",
      covered: true
    },
    {
      issue: "Ошибки в программном обеспечении",
      solution: "Обновление ПО, восстановление настроек",
      timeframe: "1 день",
      covered: true
    },
    {
      issue: "Механические повреждения",
      solution: "Замена поврежденных деталей, юстировка",
      timeframe: "5-7 дней",
      covered: false
    },
    {
      issue: "Износ расходных материалов",
      solution: "Замена фильтров, ламп, охлаждающей жидкости",
      timeframe: "1 день",
      covered: false
    }
  ]

  const warrantyTerms = [
    "Гарантия действует с момента ввода оборудования в эксплуатацию",
    "Гарантийное обслуживание выполняется только авторизованными сервисными центрами",
    "Гарантия не распространяется на расходные материалы и комплектующие",
    "При нарушении правил эксплуатации гарантия может быть аннулирована",
    "Гарантийный ремонт выполняется бесплатно в течение гарантийного срока",
    "Время гарантийного ремонта не засчитывается в гарантийный период"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Гарантийное обслуживание</h1>
          <p className="text-xl opacity-90">Надежная защита вашего оборудования и инвестиций</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Warranty Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Программы гарантийного обслуживания
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {warrantyPrograms.map((program, index) => (
              <Card key={index} className={`border-medical-blue/20 hover:shadow-xl transition-all duration-300 ${index === 1 ? 'ring-2 ring-medical-blue/30 scale-105' : ''}`}>
                <CardHeader className="text-center">
                  <div className={`p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 ${program.color}`}>
                    <Icon name={program.icon} size={32} />
                  </div>
                  <CardTitle className="text-medical-blue text-xl">{program.title}</CardTitle>
                  <div className="text-3xl font-bold text-medical-green">{program.duration}</div>
                  <CardDescription className="text-base">{program.coverage}</CardDescription>
                  <div className="text-2xl font-bold text-medical-gray-dark">{program.price}</div>
                  {index === 1 && (
                    <Badge className="bg-medical-blue text-white">Рекомендуем</Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon name="Check" className="mr-2 mt-1 text-medical-green" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                    Выбрать программу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Warranty Claim Form */}
          <div>
            <Card className="shadow-xl border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue flex items-center">
                  <Icon name="FileText" className="mr-3" size={28} />
                  Подать гарантийную заявку
                </CardTitle>
                <CardDescription>
                  Заполните форму для оформления гарантийного обслуживания
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleWarrantySubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="serialNumber">Серийный номер *</Label>
                      <Input 
                        id="serialNumber" 
                        placeholder="SN123456789"
                        value={warrantyForm.serialNumber}
                        onChange={(e) => setWarrantyForm({...warrantyForm, serialNumber: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="model">Модель оборудования *</Label>
                      <Select value={warrantyForm.model} onValueChange={(value) => setWarrantyForm({...warrantyForm, model: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите модель" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diode-pro">DiodeLux Pro</SelectItem>
                          <SelectItem value="thermalift">ThermaLift RF</SelectItem>
                          <SelectItem value="photomax">PhotoMax IPL</SelectItem>
                          <SelectItem value="hifu-system">HIFU System</SelectItem>
                          <SelectItem value="mesojet">MesoJet</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="purchaseDate">Дата покупки *</Label>
                    <Input 
                      id="purchaseDate" 
                      type="date"
                      value={warrantyForm.purchaseDate}
                      onChange={(e) => setWarrantyForm({...warrantyForm, purchaseDate: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="clientName">Контактное лицо *</Label>
                      <Input 
                        id="clientName" 
                        placeholder="Ваше имя"
                        value={warrantyForm.clientName}
                        onChange={(e) => setWarrantyForm({...warrantyForm, clientName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        value={warrantyForm.phone}
                        onChange={(e) => setWarrantyForm({...warrantyForm, phone: e.target.value})}
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
                      value={warrantyForm.email}
                      onChange={(e) => setWarrantyForm({...warrantyForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="issueDescription">Описание проблемы *</Label>
                    <Textarea 
                      id="issueDescription" 
                      placeholder="Подробно опишите неисправность, когда она возникла, какие симптомы наблюдаются..."
                      rows={4}
                      value={warrantyForm.issueDescription}
                      onChange={(e) => setWarrantyForm({...warrantyForm, issueDescription: e.target.value})}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Подать заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Warranty Check */}
          <div className="space-y-8">
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue flex items-center">
                  <Icon name="Search" className="mr-2" size={24} />
                  Проверить гарантию
                </CardTitle>
                <CardDescription>
                  Введите данные для проверки гарантийного статуса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCheckSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkSerial">Серийный номер</Label>
                    <Input 
                      id="checkSerial" 
                      placeholder="SN123456789"
                      value={checkForm.serialNumber}
                      onChange={(e) => setCheckForm({...checkForm, serialNumber: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkModel">Модель</Label>
                    <Select value={checkForm.model} onValueChange={(value) => setCheckForm({...checkForm, model: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите модель" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diode-pro">DiodeLux Pro</SelectItem>
                        <SelectItem value="thermalift">ThermaLift RF</SelectItem>
                        <SelectItem value="photomax">PhotoMax IPL</SelectItem>
                        <SelectItem value="hifu-system">HIFU System</SelectItem>
                        <SelectItem value="mesojet">MesoJet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                    <Icon name="Search" className="mr-2" size={16} />
                    Проверить статус
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Warranty Status Example */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center">
                  <Icon name="CheckCircle" className="mr-2" size={24} />
                  Статус гарантии
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Модель:</span>
                    <span className="font-semibold">DiodeLux Pro</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Серийный номер:</span>
                    <span className="font-semibold">DL123456789</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Дата покупки:</span>
                    <span className="font-semibold">15.06.2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Гарантия до:</span>
                    <span className="font-semibold text-green-600">15.06.2025</span>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Оставшийся срок:</span>
                      <span className="font-semibold">8 месяцев</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <Badge className="bg-green-100 text-green-800 w-full justify-center py-2">
                    Гарантия активна
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Warranty Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Процесс гарантийного обслуживания
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {warrantySteps.map((step, index) => (
              <Card key={index} className="text-center border-medical-blue/20 relative">
                {index < warrantySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <Icon name="ArrowRight" className="text-medical-blue" size={24} />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-medical-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <Icon name={step.icon} className="mx-auto mb-4 text-medical-blue" size={32} />
                  <h3 className="font-bold text-lg text-medical-gray-dark mb-2">{step.title}</h3>
                  <p className="text-medical-gray text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Типичные неисправности и решения
          </h2>
          <div className="space-y-4">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="border-medical-blue/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="font-semibold text-medical-gray-dark mr-3">{issue.issue}</h3>
                        <Badge className={issue.covered ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                          {issue.covered ? "Покрывается гарантией" : "Платное обслуживание"}
                        </Badge>
                      </div>
                      <p className="text-medical-gray mb-2">{issue.solution}</p>
                      <div className="flex items-center text-sm text-medical-gray">
                        <Icon name="Clock" className="mr-1" size={14} />
                        Время выполнения: {issue.timeframe}
                      </div>
                    </div>
                    <Icon name={issue.covered ? "CheckCircle" : "XCircle"} 
                          className={issue.covered ? "text-green-500" : "text-red-500"} 
                          size={24} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Warranty Terms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Условия гарантии
          </h2>
          <Card className="border-medical-blue/20">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {warrantyTerms.map((term, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="Info" className="mr-3 mt-1 text-medical-blue" size={16} />
                    <span className="text-medical-gray">{term}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна помощь с гарантией?</h2>
          <p className="text-xl mb-6 opacity-90">
            Наши специалисты помогут разобраться с любыми вопросами по гарантийному обслуживанию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="Phone" className="mr-2" size={20} />
              Горячая линия
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Онлайн консультация
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Warranty
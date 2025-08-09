import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Financing = () => {
  const [loanAmount, setLoanAmount] = useState([2000000])
  const [loanTerm, setLoanTerm] = useState([36])
  const [interestRate] = useState(12)
  
  const [applicationForm, setApplicationForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    inn: '',
    equipmentType: '',
    amount: '',
    term: '',
    financingType: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Заявка на финансирование отправлена:', applicationForm)
  }

  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0]
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm[0]
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1)
    
    return Math.round(monthlyPayment)
  }

  const financingOptions = [
    {
      title: "Лизинг",
      description: "Финансовая аренда с правом выкупа",
      icon: "CreditCard",
      features: [
        "Срок от 12 до 60 месяцев",
        "Первоначальный взнос от 10%",
        "Ставка от 8% годовых",
        "Налоговые льготы"
      ],
      benefits: [
        "Экономия на налогах",
        "Сохранение оборотных средств",
        "Быстрое оформление",
        "Гибкие условия"
      ],
      minAmount: "500 000 ₽",
      maxTerm: "60 месяцев"
    },
    {
      title: "Рассрочка 0%",
      description: "Беспроцентная рассрочка от производителя",
      icon: "Percent",
      features: [
        "Срок до 12 месяцев",
        "Без процентов и переплат",
        "Минимум документов",
        "Быстрое одобрение"
      ],
      benefits: [
        "Никаких переплат",
        "Простое оформление",
        "Быстрое решение",
        "Без залогов"
      ],
      minAmount: "300 000 ₽",
      maxTerm: "12 месяцев"
    },
    {
      title: "Банковский кредит",
      description: "Целевой кредит на медицинское оборудование",
      icon: "Building",
      features: [
        "Срок до 84 месяцев",
        "Ставка от 15% годовых",
        "Сумма до 50 млн ₽",
        "Индивидуальные условия"
      ],
      benefits: [
        "Большие суммы",
        "Длительный срок",
        "Собственность сразу",
        "Налоговые вычеты"
      ],
      minAmount: "1 000 000 ₽",
      maxTerm: "84 месяца"
    }
  ]

  const leasingPartners = [
    {
      name: "Сбербанк Лизинг",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      rate: "от 8%",
      term: "до 60 мес",
      features: ["Быстрое решение", "Гибкие условия", "Налоговые льготы"]
    },
    {
      name: "ВТБ Лизинг",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      rate: "от 9%",
      term: "до 48 мес",
      features: ["Минимальный пакет документов", "Онлайн заявка", "Льготные программы"]
    },
    {
      name: "Альфа-Лизинг",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      rate: "от 10%",
      term: "до 36 мес",
      features: ["Экспресс-рассмотрение", "Индивидуальный подход", "Страхование"]
    },
    {
      name: "Европлан",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      rate: "от 11%",
      term: "до 60 мес",
      features: ["Специальные программы", "Отсрочка платежей", "Сезонные акции"]
    }
  ]

  const documents = [
    "Учредительные документы компании",
    "Справка о постановке на налоговый учет",
    "Бухгалтерский баланс за последний год",
    "Справка о движении денежных средств",
    "Лицензия на медицинскую деятельность",
    "Справка об отсутствии задолженности по налогам"
  ]

  const advantages = [
    {
      icon: "TrendingUp",
      title: "Рост бизнеса",
      description: "Возможность расширения без крупных единовременных вложений"
    },
    {
      icon: "DollarSign",
      title: "Сохранение капитала",
      description: "Оборотные средства остаются в бизнесе для текущих операций"
    },
    {
      icon: "Shield",
      title: "Налоговые льготы",
      description: "Лизинговые платежи относятся на расходы, снижая налогооблагаемую базу"
    },
    {
      icon: "Clock",
      title: "Быстрое оформление",
      description: "Решение по заявке принимается в течение 1-3 рабочих дней"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Финансирование</h1>
          <p className="text-xl opacity-90">Гибкие условия приобретения медицинского оборудования</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Calculator */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Калькулятор лизинговых платежей
          </h2>
          <Card className="max-w-4xl mx-auto border-medical-blue/20 shadow-xl">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-4 block">
                      Стоимость оборудования: {loanAmount[0].toLocaleString('ru-RU')} ₽
                    </Label>
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      max={10000000}
                      min={500000}
                      step={100000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-medical-gray mt-2">
                      <span>500 тыс ₽</span>
                      <span>10 млн ₽</span>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-base font-semibold mb-4 block">
                      Срок лизинга: {loanTerm[0]} месяцев
                    </Label>
                    <Slider
                      value={loanTerm}
                      onValueChange={setLoanTerm}
                      max={60}
                      min={12}
                      step={6}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-medical-gray mt-2">
                      <span>12 мес</span>
                      <span>60 мес</span>
                    </div>
                  </div>

                  <div className="bg-medical-gray-light p-4 rounded-lg">
                    <div className="text-sm text-medical-gray mb-1">Процентная ставка</div>
                    <div className="text-2xl font-bold text-medical-blue">{interestRate}% годовых</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-medical-blue to-medical-blue-light text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-6">Расчет платежей</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Стоимость оборудования:</span>
                      <span className="font-semibold">{loanAmount[0].toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Первоначальный взнос (10%):</span>
                      <span className="font-semibold">{(loanAmount[0] * 0.1).toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Сумма лизинга:</span>
                      <span className="font-semibold">{(loanAmount[0] * 0.9).toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <hr className="border-white/30" />
                    <div className="flex justify-between items-center text-lg">
                      <span>Ежемесячный платеж:</span>
                      <span className="font-bold text-2xl">{calculateMonthlyPayment().toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-white text-medical-blue hover:bg-gray-100">
                    Подать заявку на лизинг
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financing Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Варианты финансирования
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <Card key={index} className="border-medical-blue/20 hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="p-4 bg-medical-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Icon name={option.icon} className="text-medical-blue" size={32} />
                  </div>
                  <CardTitle className="text-medical-blue">{option.title}</CardTitle>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-medical-blue">Условия:</h4>
                    <ul className="space-y-2">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <Icon name="Check" className="mr-2 mt-1 text-medical-green" size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-medical-green">Преимущества:</h4>
                    <ul className="space-y-2">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm">
                          <Icon name="Star" className="mr-2 mt-1 text-medical-green" size={14} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-medical-gray-light p-4 rounded-lg mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Минимальная сумма:</span>
                      <span className="font-semibold">{option.minAmount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Максимальный срок:</span>
                      <span className="font-semibold">{option.maxTerm}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                    Подать заявку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leasing Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Наши партнеры по лизингу
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leasingPartners.map((partner, index) => (
              <Card key={index} className="border-medical-blue/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover"
                  />
                  <CardTitle className="text-medical-blue">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-medical-gray">Ставка:</span>
                      <span className="font-semibold text-medical-green">{partner.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-medical-gray">Срок:</span>
                      <span className="font-semibold">{partner.term}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {partner.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs">
                        <Icon name="Check" className="mr-2 text-medical-green" size={12} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Application Form */}
          <div>
            <Card className="shadow-xl border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue flex items-center">
                  <Icon name="FileText" className="mr-3" size={28} />
                  Заявка на финансирование
                </CardTitle>
                <CardDescription>
                  Заполните форму для получения предварительного одобрения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Название компании *</Label>
                    <Input 
                      id="companyName" 
                      placeholder="ООО 'Ваша клиника'"
                      value={applicationForm.companyName}
                      onChange={(e) => setApplicationForm({...applicationForm, companyName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Контактное лицо *</Label>
                      <Input 
                        id="contactName" 
                        placeholder="Ваше имя"
                        value={applicationForm.contactName}
                        onChange={(e) => setApplicationForm({...applicationForm, contactName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inn">ИНН *</Label>
                      <Input 
                        id="inn" 
                        placeholder="1234567890"
                        value={applicationForm.inn}
                        onChange={(e) => setApplicationForm({...applicationForm, inn: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@company.com"
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        value={applicationForm.phone}
                        onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="equipmentType">Тип оборудования</Label>
                      <Select value={applicationForm.equipmentType} onValueChange={(value) => setApplicationForm({...applicationForm, equipmentType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="laser">Лазерное оборудование</SelectItem>
                          <SelectItem value="rf">RF-системы</SelectItem>
                          <SelectItem value="ipl">IPL системы</SelectItem>
                          <SelectItem value="hifu">HIFU аппараты</SelectItem>
                          <SelectItem value="injection">Инъекционное оборудование</SelectItem>
                          <SelectItem value="complex">Комплекс оборудования</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="financingType">Тип финансирования</Label>
                      <Select value={applicationForm.financingType} onValueChange={(value) => setApplicationForm({...applicationForm, financingType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="leasing">Лизинг</SelectItem>
                          <SelectItem value="installment">Рассрочка 0%</SelectItem>
                          <SelectItem value="credit">Банковский кредит</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Сумма финансирования *</Label>
                      <Input 
                        id="amount" 
                        placeholder="2 000 000"
                        value={applicationForm.amount}
                        onChange={(e) => setApplicationForm({...applicationForm, amount: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="term">Желаемый срок (мес)</Label>
                      <Input 
                        id="term" 
                        placeholder="36"
                        value={applicationForm.term}
                        onChange={(e) => setApplicationForm({...applicationForm, term: e.target.value})}
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Documents and Process */}
          <div className="space-y-8">
            {/* Required Documents */}
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue flex items-center">
                  <Icon name="FileText" className="mr-2" size={24} />
                  Необходимые документы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <Icon name="File" className="mr-3 mt-1 text-medical-blue" size={16} />
                      <span className="text-medical-gray text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6 border-medical-blue text-medical-blue">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать чек-лист документов
                </Button>
              </CardContent>
            </Card>

            {/* Advantages */}
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue">Преимущества финансирования</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 bg-medical-blue/10 rounded-lg mr-3">
                      <Icon name={advantage.icon} className="text-medical-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-medical-gray-dark mb-1">
                        {advantage.title}
                      </h4>
                      <p className="text-sm text-medical-gray">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы оформить финансирование?</h2>
          <p className="text-xl mb-6 opacity-90">
            Получите предварительное одобрение за 24 часа
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать платеж
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Icon name="Phone" className="mr-2" size={20} />
              Консультация эксперта
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Financing
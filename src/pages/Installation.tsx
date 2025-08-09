import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Installation = () => {
  const [installationForm, setInstallationForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    equipment: '',
    installationDate: '',
    additionalServices: [] as string[],
    specialRequirements: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Заявка на установку отправлена:', installationForm)
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setInstallationForm({
        ...installationForm,
        additionalServices: [...installationForm.additionalServices, service]
      })
    } else {
      setInstallationForm({
        ...installationForm,
        additionalServices: installationForm.additionalServices.filter(s => s !== service)
      })
    }
  }

  const installationSteps = [
    {
      step: 1,
      title: "Предварительная подготовка",
      description: "Анализ помещения и подготовка технических требований",
      duration: "1 день",
      activities: [
        "Осмотр помещения",
        "Проверка электросети",
        "Планирование размещения",
        "Согласование графика"
      ]
    },
    {
      step: 2,
      title: "Доставка и распаковка",
      description: "Транспортировка оборудования и подготовка к установке",
      duration: "1 день",
      activities: [
        "Доставка оборудования",
        "Проверка комплектности",
        "Распаковка и осмотр",
        "Подготовка к монтажу"
      ]
    },
    {
      step: 3,
      title: "Монтаж и подключение",
      description: "Установка оборудования и подключение к коммуникациям",
      duration: "1-2 дня",
      activities: [
        "Монтаж оборудования",
        "Подключение к электросети",
        "Подключение охлаждения",
        "Подключение к сети"
      ]
    },
    {
      step: 4,
      title: "Настройка и калибровка",
      description: "Программная настройка и калибровка всех систем",
      duration: "1 день",
      activities: [
        "Установка ПО",
        "Калибровка датчиков",
        "Настройка параметров",
        "Тестирование систем"
      ]
    },
    {
      step: 5,
      title: "Обучение персонала",
      description: "Практическое обучение работе с оборудованием",
      duration: "1-2 дня",
      activities: [
        "Теоретическая подготовка",
        "Практические занятия",
        "Отработка процедур",
        "Выдача сертификатов"
      ]
    },
    {
      step: 6,
      title: "Сдача в эксплуатацию",
      description: "Финальная проверка и передача оборудования клиенту",
      duration: "0.5 дня",
      activities: [
        "Финальное тестирование",
        "Подписание актов",
        "Передача документации",
        "Запуск гарантии"
      ]
    }
  ]

  const additionalServices = [
    { id: "training", label: "Дополнительное обучение персонала", price: "25 000 ₽" },
    { id: "maintenance", label: "Первое техническое обслуживание", price: "15 000 ₽" },
    { id: "warranty", label: "Расширенная гарантия", price: "50 000 ₽" },
    { id: "consumables", label: "Комплект расходных материалов", price: "30 000 ₽" },
    { id: "software", label: "Дополнительное ПО", price: "40 000 ₽" },
    { id: "accessories", label: "Дополнительные аксессуары", price: "20 000 ₽" }
  ]

  const requirements = [
    {
      category: "Помещение",
      items: [
        "Площадь не менее 15 м² для стандартного оборудования",
        "Высота потолков не менее 2.5 м",
        "Температура 18-25°C, влажность 30-70%",
        "Отсутствие прямых солнечных лучей"
      ]
    },
    {
      category: "Электропитание",
      items: [
        "Напряжение 220В ±10%, частота 50 Гц",
        "Заземление с сопротивлением не более 4 Ом",
        "УЗО и автоматические выключатели",
        "Стабилизатор напряжения (рекомендуется)"
      ]
    },
    {
      category: "Вентиляция",
      items: [
        "Приточно-вытяжная вентиляция",
        "Кратность воздухообмена не менее 3",
        "Фильтрация воздуха",
        "Контроль температуры и влажности"
      ]
    },
    {
      category: "Безопасность",
      items: [
        "Система пожарной сигнализации",
        "Аварийное освещение",
        "Средства первой помощи",
        "Инструкции по безопасности"
      ]
    }
  ]

  const equipmentTypes = [
    { value: "laser", label: "Лазерное оборудование", installTime: "2-3 дня" },
    { value: "rf", label: "RF-системы", installTime: "1-2 дня" },
    { value: "ipl", label: "IPL системы", installTime: "1-2 дня" },
    { value: "hifu", label: "HIFU аппараты", installTime: "2-3 дня" },
    { value: "injection", label: "Инъекционное оборудование", installTime: "1 день" },
    { value: "complex", label: "Комплекс оборудования", installTime: "5-7 дней" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Установка оборудования</h1>
          <p className="text-xl opacity-90">Профессиональная установка и ввод в эксплуатацию</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Installation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Этапы установки
          </h2>
          <div className="space-y-8">
            {installationSteps.map((step, index) => (
              <Card key={index} className="border-medical-blue/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-medical-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-medical-blue mb-2">{step.title}</h3>
                          <p className="text-medical-gray">{step.description}</p>
                        </div>
                        <Badge className="bg-medical-green text-white mt-2 lg:mt-0">
                          {step.duration}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {step.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-center text-sm">
                            <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Installation Request Form */}
          <div>
            <Card className="shadow-xl border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue flex items-center">
                  <Icon name="Settings" className="mr-3" size={28} />
                  Заявка на установку
                </CardTitle>
                <CardDescription>
                  Заполните форму для планирования установки оборудования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Название клиники *</Label>
                    <Input 
                      id="companyName" 
                      placeholder="ООО 'Ваша клиника'"
                      value={installationForm.companyName}
                      onChange={(e) => setInstallationForm({...installationForm, companyName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Контактное лицо *</Label>
                      <Input 
                        id="contactName" 
                        placeholder="Ваше имя"
                        value={installationForm.contactName}
                        onChange={(e) => setInstallationForm({...installationForm, contactName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        value={installationForm.phone}
                        onChange={(e) => setInstallationForm({...installationForm, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@clinic.com"
                      value={installationForm.email}
                      onChange={(e) => setInstallationForm({...installationForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес установки *</Label>
                    <Textarea 
                      id="address" 
                      placeholder="Полный адрес клиники с указанием этажа и номера кабинета"
                      rows={2}
                      value={installationForm.address}
                      onChange={(e) => setInstallationForm({...installationForm, address: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="equipment">Тип оборудования *</Label>
                      <Select value={installationForm.equipment} onValueChange={(value) => setInstallationForm({...installationForm, equipment: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          {equipmentTypes.map(type => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label} ({type.installTime})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="installationDate">Желаемая дата установки</Label>
                      <Input 
                        id="installationDate" 
                        type="date"
                        value={installationForm.installationDate}
                        onChange={(e) => setInstallationForm({...installationForm, installationDate: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Дополнительные услуги:</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {additionalServices.map(service => (
                        <div key={service.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={service.id}
                            checked={installationForm.additionalServices.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                          />
                          <Label htmlFor={service.id} className="text-sm flex-1">
                            {service.label}
                          </Label>
                          <span className="text-sm text-medical-green font-semibold">{service.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequirements">Особые требования</Label>
                    <Textarea 
                      id="specialRequirements" 
                      placeholder="Укажите любые особые требования к установке..."
                      rows={3}
                      value={installationForm.specialRequirements}
                      onChange={(e) => setInstallationForm({...installationForm, specialRequirements: e.target.value})}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark"
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Запланировать установку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Requirements */}
          <div className="space-y-8">
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue flex items-center">
                  <Icon name="CheckSquare" className="mr-2" size={24} />
                  Требования к помещению
                </CardTitle>
                <CardDescription>
                  Подготовьте помещение согласно техническим требованиям
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {requirements.map((req, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-medical-blue mb-3">{req.category}</h4>
                      <ul className="space-y-2">
                        {req.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-sm">
                            <Icon name="Check" className="mr-2 mt-1 text-medical-green" size={14} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Installation Checklist */}
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue flex items-center">
                  <Icon name="ClipboardList" className="mr-2" size={24} />
                  Чек-лист подготовки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Помещение подготовлено согласно требованиям",
                    "Электросеть проверена и соответствует нормам",
                    "Вентиляция установлена и работает",
                    "Доступ для доставки оборудования обеспечен",
                    "Персонал готов к обучению",
                    "Документы на помещение подготовлены"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Checkbox id={`checklist-${index}`} />
                      <Label htmlFor={`checklist-${index}`} className="text-sm">
                        {item}
                      </Label>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6 border-medical-blue text-medical-blue">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать полный чек-лист
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Пакеты услуг установки
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-medical-blue/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Package" className="mx-auto mb-4 text-medical-blue" size={40} />
                <CardTitle className="text-medical-blue">Базовый</CardTitle>
                <div className="text-2xl font-bold text-medical-green">от 50 000 ₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Доставка и распаковка
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Установка и подключение
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Базовая настройка
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Инструктаж персонала
                  </li>
                </ul>
                <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className="border-medical-blue/20 hover:shadow-lg transition-shadow ring-2 ring-medical-blue/30">
              <CardHeader className="text-center">
                <Icon name="Star" className="mx-auto mb-4 text-medical-blue" size={40} />
                <CardTitle className="text-medical-blue">Стандартный</CardTitle>
                <div className="text-2xl font-bold text-medical-green">от 80 000 ₽</div>
                <Badge className="bg-medical-blue text-white">Популярный</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Все услуги базового пакета
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Полная калибровка
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Обучение 3 специалистов
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Комплект расходников
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Первое ТО бесплатно
                  </li>
                </ul>
                <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className="border-medical-blue/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Crown" className="mx-auto mb-4 text-medical-blue" size={40} />
                <CardTitle className="text-medical-blue">Премиум</CardTitle>
                <div className="text-2xl font-bold text-medical-green">от 120 000 ₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Все услуги стандартного пакета
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Обучение до 5 специалистов
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Расширенная гарантия
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Приоритетная поддержка
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="mr-2 text-medical-green" size={14} />
                    Консультации экспертов
                  </li>
                </ul>
                <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Safety and Compliance */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Безопасность и соответствие
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-medical-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-medical-blue" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Сертифицированные специалисты</h3>
              <p className="text-medical-gray">Все работы выполняют аттестованные инженеры</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="FileCheck" className="text-medical-green" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Соблюдение стандартов</h3>
              <p className="text-medical-gray">Установка согласно международным требованиям</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-medical-blue" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Соблюдение сроков</h3>
              <p className="text-medical-gray">Установка в согласованные сроки</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-medical-green" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Гарантия качества</h3>
              <p className="text-medical-gray">Гарантия на все виды работ</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы к установке?</h2>
          <p className="text-xl mb-6 opacity-90">
            Наши специалисты проведут установку быстро и качественно
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="Calendar" className="mr-2" size={20} />
              Запланировать установку
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Icon name="Phone" className="mr-2" size={20} />
              Техническая консультация
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Installation
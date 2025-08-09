import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Comparison = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<number[]>([1, 2, 3])

  const equipment = [
    {
      id: 1,
      name: "DiodeLux Pro",
      category: "Лазерное оборудование",
      price: "2 500 000 ₽",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      specs: {
        wavelength: "808 nm",
        power: "2000 W",
        spotSize: "12x20 mm",
        cooling: "Сапфировое охлаждение",
        frequency: "10 Hz",
        display: "15' сенсорный",
        warranty: "24 месяца",
        certification: "CE, FDA, ISO 13485"
      },
      features: [
        "Высокая эффективность",
        "Безболезненные процедуры",
        "Быстрая обработка",
        "Универсальность применения"
      ],
      pros: [
        "Отличные результаты",
        "Надежность",
        "Простота использования",
        "Хорошая поддержка"
      ],
      cons: [
        "Высокая стоимость",
        "Требует обучения"
      ]
    },
    {
      id: 2,
      name: "ThermaLift RF",
      category: "RF-системы",
      price: "1 800 000 ₽",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      specs: {
        wavelength: "RF 1-6 MHz",
        power: "300 W",
        spotSize: "Различные насадки",
        cooling: "Контактное охлаждение",
        frequency: "Регулируемая",
        display: "12' сенсорный",
        warranty: "18 месяцев",
        certification: "CE, Medical Device"
      },
      features: [
        "Неинвазивная подтяжка",
        "Стимуляция коллагена",
        "Безопасность",
        "Комфорт пациентов"
      ],
      pros: [
        "Доступная цена",
        "Быстрые результаты",
        "Минимальные побочные эффекты",
        "Широкий спектр применения"
      ],
      cons: [
        "Требует курса процедур",
        "Ограниченная глубина воздействия"
      ]
    },
    {
      id: 3,
      name: "PhotoMax IPL",
      category: "IPL системы",
      price: "1 200 000 ₽",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      specs: {
        wavelength: "420-1200 nm",
        power: "3000 W",
        spotSize: "15x35 mm",
        cooling: "Воздушное охлаждение",
        frequency: "1-3 Hz",
        display: "10' сенсорный",
        warranty: "12 месяцев",
        certification: "CE, FDA"
      },
      features: [
        "Фотоомоложение",
        "Удаление пигментации",
        "Лечение сосудов",
        "Эпиляция"
      ],
      pros: [
        "Многофункциональность",
        "Хорошее соотношение цена/качество",
        "Простота обслуживания",
        "Быстрая окупаемость"
      ],
      cons: [
        "Ограничения по типу кожи",
        "Требует сменных фильтров"
      ]
    },
    {
      id: 4,
      name: "HIFU UltraLift",
      category: "HIFU системы",
      price: "3 200 000 ₽",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      specs: {
        wavelength: "Ультразвук 4 MHz",
        power: "0.1-2.0 J",
        spotSize: "1.5-4.5 mm глубина",
        cooling: "Не требуется",
        frequency: "Импульсный",
        display: "17' сенсорный",
        warranty: "36 месяцев",
        certification: "CE, FDA, KFDA"
      },
      features: [
        "Глубокая подтяжка",
        "Точечное воздействие",
        "Долгосрочный эффект",
        "Безопасность"
      ],
      pros: [
        "Выраженный эффект лифтинга",
        "Длительный результат",
        "Неинвазивность",
        "Высокая точность"
      ],
      cons: [
        "Высокая стоимость",
        "Болезненность процедуры"
      ]
    },
    {
      id: 5,
      name: "MesoJet Pro",
      category: "Инъекционное оборудование",
      price: "450 000 ₽",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      specs: {
        wavelength: "Не применимо",
        power: "Пневматическое давление",
        spotSize: "Точечное воздействие",
        cooling: "Не требуется",
        frequency: "Регулируемая",
        display: "7' сенсорный",
        warranty: "12 месяцев",
        certification: "CE, GMP"
      },
      features: [
        "Безыгольная мезотерапия",
        "Точная дозировка",
        "Стерильность",
        "Комфорт"
      ],
      pros: [
        "Доступная цена",
        "Безболезненность",
        "Высокая безопасность",
        "Простота использования"
      ],
      cons: [
        "Ограниченная глубина",
        "Требует расходников"
      ]
    },
    {
      id: 6,
      name: "CoolSculpt Pro",
      category: "Криолиполиз",
      price: "2 800 000 ₽",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      specs: {
        wavelength: "Не применимо",
        power: "Охлаждение до -11°C",
        spotSize: "Различные аппликаторы",
        cooling: "Контролируемое охлаждение",
        frequency: "Не применимо",
        display: "12' сенсорный",
        warranty: "24 месяца",
        certification: "FDA, CE, Health Canada"
      },
      features: [
        "Разрушение жировых клеток",
        "Неинвазивность",
        "Долгосрочный результат",
        "Безопасность"
      ],
      pros: [
        "Эффективное похудение",
        "Отсутствие реабилитации",
        "FDA одобрено",
        "Высокий спрос"
      ],
      cons: [
        "Высокая стоимость",
        "Длительность процедуры"
      ]
    }
  ]

  const comparisonCriteria = [
    { key: "price", label: "Цена", type: "text" },
    { key: "wavelength", label: "Длина волны/Технология", type: "text" },
    { key: "power", label: "Мощность", type: "text" },
    { key: "spotSize", label: "Размер пятна/Насадки", type: "text" },
    { key: "cooling", label: "Система охлаждения", type: "text" },
    { key: "frequency", label: "Частота", type: "text" },
    { key: "display", label: "Дисплей", type: "text" },
    { key: "warranty", label: "Гарантия", type: "text" },
    { key: "certification", label: "Сертификация", type: "text" }
  ]

  const selectedEquipmentData = equipment.filter(item => selectedEquipment.includes(item.id))

  const toggleEquipment = (id: number) => {
    if (selectedEquipment.includes(id)) {
      if (selectedEquipment.length > 1) {
        setSelectedEquipment(selectedEquipment.filter(item => item !== id))
      }
    } else {
      if (selectedEquipment.length < 4) {
        setSelectedEquipment([...selectedEquipment, id])
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Сравнение оборудования</h1>
          <p className="text-xl opacity-90">Подробное сравнение характеристик и возможностей</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Equipment Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-medical-gray-dark mb-6">
            Выберите оборудование для сравнения (до 4 единиц)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map(item => (
              <Card 
                key={item.id} 
                className={`border-medical-blue/20 cursor-pointer transition-all duration-300 ${
                  selectedEquipment.includes(item.id) 
                    ? 'ring-2 ring-medical-blue shadow-lg' 
                    : 'hover:shadow-lg'
                }`}
                onClick={() => toggleEquipment(item.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Checkbox 
                      checked={selectedEquipment.includes(item.id)}
                      onChange={() => {}}
                      className="pointer-events-none"
                    />
                    <Badge className="bg-medical-blue/10 text-medical-blue">
                      {item.category}
                    </Badge>
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <CardTitle className="text-medical-blue">{item.name}</CardTitle>
                  <div className="text-xl font-bold text-medical-green">{item.price}</div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedEquipmentData.length > 0 && (
          <div className="mb-16">
            <Card className="border-medical-blue/20 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue">
                  Сравнительная таблица характеристик
                </CardTitle>
                <CardDescription>
                  Детальное сравнение выбранного оборудования
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-48 bg-medical-gray-light">Характеристика</TableHead>
                        {selectedEquipmentData.map(item => (
                          <TableHead key={item.id} className="text-center min-w-48">
                            <div className="space-y-2">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-16 h-16 mx-auto rounded-lg object-cover"
                              />
                              <div className="font-semibold text-medical-blue">{item.name}</div>
                              <Badge className="bg-medical-green text-white">{item.price}</Badge>
                            </div>
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comparisonCriteria.map(criterion => (
                        <TableRow key={criterion.key}>
                          <TableCell className="font-semibold bg-medical-gray-light">
                            {criterion.label}
                          </TableCell>
                          {selectedEquipmentData.map(item => (
                            <TableCell key={item.id} className="text-center">
                              {criterion.key === 'price' 
                                ? item.price 
                                : item.specs[criterion.key as keyof typeof item.specs]
                              }
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Detailed Comparison */}
        {selectedEquipmentData.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
              Подробное сравнение
            </h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {selectedEquipmentData.map(item => (
                <Card key={item.id} className="border-medical-blue/20">
                  <CardHeader>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-medical-blue">{item.name}</CardTitle>
                    <div className="text-2xl font-bold text-medical-green">{item.price}</div>
                    <Badge className="w-fit">{item.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-medical-blue">Основные возможности:</h4>
                        <ul className="space-y-2">
                          {item.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <Icon name="Check" className="mr-2 mt-1 text-medical-green" size={14} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-600">Преимущества:</h4>
                        <ul className="space-y-2">
                          {item.pros.map((pro, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <Icon name="Plus" className="mr-2 mt-1 text-green-500" size={14} />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-red-600">Недостатки:</h4>
                        <ul className="space-y-2">
                          {item.cons.map((con, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <Icon name="Minus" className="mr-2 mt-1 text-red-500" size={14} />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 bg-medical-blue hover:bg-medical-blue-dark">
                          Подробнее
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="ShoppingCart" className="mr-2" size={16} />
                          Купить
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Руководство по выбору
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue flex items-center">
                  <Icon name="Target" className="mr-2" size={24} />
                  Для каких задач подходит
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-medical-blue mb-2">Лазерное оборудование:</h4>
                    <p className="text-sm text-medical-gray">Эпиляция, омоложение, лечение сосудов, удаление татуировок</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-blue mb-2">RF-системы:</h4>
                    <p className="text-sm text-medical-gray">Подтяжка кожи, уменьшение морщин, коррекция овала лица</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-blue mb-2">IPL системы:</h4>
                    <p className="text-sm text-medical-gray">Фотоомоложение, удаление пигментации, лечение акне</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-blue mb-2">HIFU аппараты:</h4>
                    <p className="text-sm text-medical-gray">Глубокий лифтинг, подтяжка SMAS, коррекция контуров</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue flex items-center">
                  <Icon name="DollarSign" className="mr-2" size={24} />
                  Рекомендации по бюджету
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">До 1 млн ₽:</h4>
                    <p className="text-sm text-green-600">IPL системы, инъекционное оборудование</p>
                  </div>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold text-yellow-700 mb-2">1-2 млн ₽:</h4>
                    <p className="text-sm text-yellow-600">RF-системы, базовые лазеры</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">2-3 млн ₽:</h4>
                    <p className="text-sm text-blue-600">Профессиональные лазеры, криолиполиз</p>
                  </div>
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Свыше 3 млн ₽:</h4>
                    <p className="text-sm text-purple-600">HIFU системы, комплексные решения</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Expert Recommendations */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Рекомендации экспертов
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-medical-blue/20 text-center p-6">
              <Icon name="TrendingUp" className="mx-auto mb-4 text-medical-blue" size={40} />
              <h3 className="font-bold text-lg text-medical-gray-dark mb-4">Для начинающих клиник</h3>
              <p className="text-medical-gray mb-4">
                Рекомендуем начать с IPL системы или RF-аппарата. 
                Быстрая окупаемость и широкий спектр процедур.
              </p>
              <Button variant="outline" className="border-medical-blue text-medical-blue">
                Подобрать комплект
              </Button>
            </Card>

            <Card className="border-medical-blue/20 text-center p-6">
              <Icon name="Star" className="mx-auto mb-4 text-medical-blue" size={40} />
              <h3 className="font-bold text-lg text-medical-gray-dark mb-4">Для развивающихся клиник</h3>
              <p className="text-medical-gray mb-4">
                Добавьте лазерное оборудование для расширения спектра услуг 
                и увеличения прибыльности.
              </p>
              <Button variant="outline" className="border-medical-blue text-medical-blue">
                Расширить возможности
              </Button>
            </Card>

            <Card className="border-medical-blue/20 text-center p-6">
              <Icon name="Crown" className="mx-auto mb-4 text-medical-blue" size={40} />
              <h3 className="font-bold text-lg text-medical-gray-dark mb-4">Для премиум клиник</h3>
              <p className="text-medical-gray mb-4">
                HIFU системы и комплексные решения для предоставления 
                самых современных процедур.
              </p>
              <Button variant="outline" className="border-medical-blue text-medical-blue">
                Премиум решения
              </Button>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна помощь в выборе?</h2>
          <p className="text-xl mb-6 opacity-90">
            Наши эксперты помогут подобрать оптимальное оборудование для ваших задач
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="Phone" className="mr-2" size={20} />
              Консультация эксперта
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать окупаемость
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comparison
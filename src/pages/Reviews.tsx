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

const Reviews = () => {
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    equipment: '',
    rating: '',
    title: '',
    review: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Отзыв отправлен:', reviewForm)
  }

  const reviews = [
    {
      id: 1,
      name: "Анна Петрова",
      position: "Главный врач",
      company: "Клиника 'Красота и Здоровье'",
      city: "Москва",
      equipment: "DiodeLux Pro",
      rating: 5,
      date: "2024-01-15",
      title: "Отличное оборудование и сервис",
      text: "Приобрели лазерный аппарат DiodeLux Pro полгода назад. Качество оборудования превосходное, результаты процедур отличные. Особенно хочу отметить профессиональное обучение персонала и быструю техническую поддержку. Рекомендую!",
      avatar: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      verified: true
    },
    {
      id: 2,
      name: "Дмитрий Соколов",
      position: "Директор",
      company: "Медицинский центр 'Эстетик'",
      city: "Санкт-Петербург",
      equipment: "RF-система ThermaLift",
      rating: 5,
      date: "2024-01-12",
      title: "Надежный партнер",
      text: "Сотрудничаем с МедКосмет уже 3 года. За это время приобрели несколько единиц оборудования. Всегда качественная техника, своевременная доставка, профессиональная установка. Техническая поддержка работает круглосуточно.",
      avatar: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      verified: true
    },
    {
      id: 3,
      name: "Елена Морозова",
      position: "Врач-косметолог",
      company: "Клиника 'Новая Эра'",
      city: "Екатеринбург",
      equipment: "IPL система PhotoMax",
      rating: 4,
      date: "2024-01-10",
      title: "Хорошее соотношение цена-качество",
      text: "IPL система работает стабильно, пациенты довольны результатами. Обучение прошли качественно, все вопросы объяснили подробно. Единственный минус - долгая доставка в регион, но это компенсируется качеством оборудования.",
      avatar: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      verified: true
    },
    {
      id: 4,
      name: "Михаил Козлов",
      position: "Главный врач",
      company: "Центр эстетической медицины",
      city: "Новосибирск",
      equipment: "HIFU аппарат",
      rating: 5,
      date: "2024-01-08",
      title: "Превосходные результаты",
      text: "HIFU аппарат показывает отличные результаты в подтяжке кожи. Пациенты видят эффект уже после первой процедуры. Техническая поддержка всегда на связи, помогают решить любые вопросы. Планируем расширить сотрудничество.",
      avatar: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      verified: true
    },
    {
      id: 5,
      name: "Ольга Смирнова",
      position: "Управляющий",
      company: "Сеть клиник 'Медэстетик'",
      city: "Казань",
      equipment: "Комплекс оборудования",
      rating: 5,
      date: "2024-01-05",
      title: "Комплексное оснащение клиники",
      text: "Оснащали новую клиику полностью через МедКосмет. Помогли с выбором оборудования, предоставили выгодные условия лизинга. Все аппараты работают без нареканий. Персонал прошел качественное обучение. Очень довольны сотрудничеством!",
      avatar: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      verified: true
    },
    {
      id: 6,
      name: "Сергей Иванов",
      position: "Врач-дерматолог",
      company: "Клиника 'Дерма Плюс'",
      city: "Ростов-на-Дону",
      equipment: "Лазерная система",
      rating: 4,
      date: "2024-01-03",
      title: "Качественное оборудование",
      text: "Лазерная система работает стабильно уже год. Результаты процедур соответствуют заявленным характеристикам. Сервисное обслуживание проводится своевременно. Рекомендую как надежного поставщика медицинского оборудования.",
      avatar: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      verified: true
    }
  ]

  const stats = {
    totalReviews: 156,
    averageRating: 4.8,
    ratings: {
      5: 78,
      4: 15,
      3: 5,
      2: 1,
      1: 1
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getRatingPercentage = (rating: number) => {
    return (stats.ratings[rating as keyof typeof stats.ratings] / stats.totalReviews) * 100
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h1>
          <p className="text-xl opacity-90">Мнения профессионалов о нашем оборудовании и сервисе</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Rating Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-medical-blue/20 text-center p-8">
            <div className="text-5xl font-bold text-medical-blue mb-2">{stats.averageRating}</div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(stats.averageRating))}
            </div>
            <div className="text-medical-gray">Средняя оценка</div>
            <div className="text-sm text-medical-gray mt-1">на основе {stats.totalReviews} отзывов</div>
          </Card>

          <Card className="border-medical-blue/20 p-6 lg:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-medical-blue">Распределение оценок</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[5, 4, 3, 2, 1].map(rating => (
                <div key={rating} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm font-medium">{rating}</span>
                    <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1">
                    <Progress value={getRatingPercentage(rating)} className="h-2" />
                  </div>
                  <div className="text-sm text-medical-gray w-12 text-right">
                    {stats.ratings[rating as keyof typeof stats.ratings]}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Reviews */}
          <div className="lg:col-span-2 space-y-6">
            {reviews.map(review => (
              <Card key={review.id} className="border-medical-blue/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-medical-gray-dark">{review.name}</h3>
                          {review.verified && (
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              <Icon name="CheckCircle" className="w-3 h-3 mr-1" />
                              Проверено
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-medical-gray">{review.position}</p>
                        <p className="text-sm text-medical-gray">{review.company}, {review.city}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        {renderStars(review.rating)}
                      </div>
                      <div className="text-sm text-medical-gray">{formatDate(review.date)}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <Badge variant="outline" className="text-medical-blue border-medical-blue">
                      {review.equipment}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-medical-gray-dark mb-3">{review.title}</h4>
                  <p className="text-medical-gray leading-relaxed">{review.text}</p>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                    <Button variant="ghost" size="sm" className="text-medical-gray hover:text-medical-blue">
                      <Icon name="ThumbsUp" className="w-4 h-4 mr-2" />
                      Полезно
                    </Button>
                    <Button variant="ghost" size="sm" className="text-medical-gray hover:text-medical-blue">
                      <Icon name="Share2" className="w-4 h-4 mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                Показать еще отзывы
              </Button>
            </div>
          </div>

          {/* Review Form */}
          <div>
            <Card className="border-medical-blue/20 sticky top-8">
              <CardHeader>
                <CardTitle className="text-medical-blue flex items-center">
                  <Icon name="MessageSquare" className="mr-2" size={24} />
                  Оставить отзыв
                </CardTitle>
                <CardDescription>
                  Поделитесь опытом использования нашего оборудования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input 
                      id="name" 
                      placeholder="Введите ваше имя"
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={reviewForm.email}
                      onChange={(e) => setReviewForm({...reviewForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания</Label>
                    <Input 
                      id="company" 
                      placeholder="Название клиники"
                      value={reviewForm.company}
                      onChange={(e) => setReviewForm({...reviewForm, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Должность</Label>
                    <Input 
                      id="position" 
                      placeholder="Врач-косметолог"
                      value={reviewForm.position}
                      onChange={(e) => setReviewForm({...reviewForm, position: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="equipment">Оборудование</Label>
                    <Select value={reviewForm.equipment} onValueChange={(value) => setReviewForm({...reviewForm, equipment: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите оборудование" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diode-laser">DiodeLux Pro</SelectItem>
                        <SelectItem value="rf-system">RF-система ThermaLift</SelectItem>
                        <SelectItem value="ipl-system">IPL система PhotoMax</SelectItem>
                        <SelectItem value="hifu">HIFU аппарат</SelectItem>
                        <SelectItem value="meso">MesoJet</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rating">Оценка *</Label>
                    <Select value={reviewForm.rating} onValueChange={(value) => setReviewForm({...reviewForm, rating: value})} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите оценку" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 звезд - Отлично</SelectItem>
                        <SelectItem value="4">4 звезды - Хорошо</SelectItem>
                        <SelectItem value="3">3 звезды - Удовлетворительно</SelectItem>
                        <SelectItem value="2">2 звезды - Плохо</SelectItem>
                        <SelectItem value="1">1 звезда - Очень плохо</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Заголовок отзыва *</Label>
                    <Input 
                      id="title" 
                      placeholder="Краткое резюме вашего опыта"
                      value={reviewForm.title}
                      onChange={(e) => setReviewForm({...reviewForm, title: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="review">Отзыв *</Label>
                    <Textarea 
                      id="review" 
                      placeholder="Расскажите подробно о вашем опыте использования оборудования..."
                      rows={4}
                      value={reviewForm.review}
                      onChange={(e) => setReviewForm({...reviewForm, review: e.target.value})}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark"
                  >
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Нам доверяют
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-medical-blue mb-2">500+</div>
              <div className="text-medical-gray">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-blue mb-2">98%</div>
              <div className="text-medical-gray">Положительных отзывов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-blue mb-2">15</div>
              <div className="text-medical-gray">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-blue mb-2">24/7</div>
              <div className="text-medical-gray">Техническая поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
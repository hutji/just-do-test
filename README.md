# just-do-test
Тестовое задание для Just DO Фулфилмент

#  Проект Just DO Notification
Реализована система отправки уведомлений пользователям.

## Запуск проекта из исходников GitHub

Клонируем себе репозиторий: 

```bash 
git clone git@github.com:hutji/just-do-test.git
```
Создаем файл .env в корневой директории с таким содержанием:
```
POSTGRES_USER=django_user
POSTGRES_PASSWORD=yourpassword
POSTGRES_DB=django
DB_HOST=db
DB_PORT=5432
DEBUG_VALUE=True
SECRET_KEY=django-insecure-zqr&33j559wo1r7@i9$hxip-n6r(8$tvg3nm0+mw59(n896*zy
```

Выполняем запуск:

```bash
sudo docker compose -f docker-compose.yml up
```
## Документация к API
```
http://127.0.0.1:8000/swagger/
```
## После запуска: Миграции, сбор статистики

После запуска необходимо выполнить сбор статистики и миграции бэкенда. Статистика фронтенда собирается во время запуска контейнера, после чего он останавливается. 

```bash
sudo docker compose -f [имя-файла-docker-compose.yml] exec backend python manage.py migrate

sudo docker compose -f [имя-файла-docker-compose.yml] exec backend python manage.py collectstatic

sudo docker compose -f [имя-файла-docker-compose.yml] exec backend cp -r /app/collected_static/. /backend_static/static/
```

И далее проект доступен на: 

```
http://localhost:8000/
```

## Остановка оркестра контейнеров

В окне, где был запуск **Ctrl+С** или в другом окне:

```bash
sudo docker compose -f docker-compose.yml down
```

## Технологии проекта

```Backend```
* #### Django
* #### DRF
* #### Python 3.11
* #### Gunicorn
* #### Nginx
* #### PostgreSQL
* #### Docker
* #### Poetry
* #### Redis
```Frontend```
* #### JS
* #### Next.JS
* #### Yarn
* #### Redux
* #### Socket.IO
* #### Tailwind
* #### axios


## Информация об авторе

- Лашков Павел Александрович, backend разработчик, г. Москва
- https://github.com/hutji
FROM python:3.11
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt --no-cache-dir
#    && apt-get -y install libpq-dev gcc \
#    && pip install poetry \
#    && poetry env use 3.11 \
#    && poetry config virtualenvs.create false \
#    && poetry install
COPY . .
ENV DJANGO_SETTINGS_MODULE=backend.settings
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi:application"]
#CMD ["poetry", "run", "gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi:application"]
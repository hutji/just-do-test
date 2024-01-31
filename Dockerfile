FROM python:3.12
WORKDIR /app
COPY README.md pyproject.toml poetry.lock ./
RUN apt-get update \
    && apt-get -y install libpq-dev gcc \
    && pip install poetry \
    && poetry env use 3.12 \
    && poetry config virtualenvs.create false \
    && poetry install
COPY backend/ .
ENV DJANGO_SETTINGS_MODULE=backend.settings
CMD ["poetry", "run", "gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi:application"]
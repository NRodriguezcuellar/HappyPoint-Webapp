FROM python:3.8

COPY ./happypoint-web /app

WORKDIR /app

RUN pip install -r requirements.txt

EXPOSE 8081

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8081", "--proxy-headers"]




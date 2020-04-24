from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get('/')
def startpage(request: Request):
    return templates.TemplateResponse('startpage.html', {'request': request})


@app.get('/about-us')
def about_us(request: Request):
    return templates.TemplateResponse('about-us.html', {'request': request})


if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=5000, log_level="info")

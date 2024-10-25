import requests
import json

url = 'https://export.pioneer.ru:8098/ExportToSite.svc/ArticleList2/json/a3173353-4643-ee11-bbb5-005056bfae62'

resp = requests.get(url)
data = resp.json()

print(json.dumps(data, indent = 1))
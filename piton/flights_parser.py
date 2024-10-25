import json

with open('./flights.json', 'r', encoding='UTF-8') as file:
    flightsJson = json.load(file)

flights = flightsJson['result']['flights']

result = {}

for flight in flights:
    legs = flight['flight']['legs']
    for leg in legs:
        segments = leg['segments']
        for segment in segments:
            result['depAir'] = segment['departureAirport']['caption']
            result['depCity'] = segment['departureCity']['caption']
            result['arrAir'] = segment['arrivalAirport']['caption']
            result['arrCity'] = segment['arrivalCity']['caption']

print(json.dumps(result, indent = 1))

# print(flights[0]['flight']['legs'][0]['segments'][0]['arrivalCity'])
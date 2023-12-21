curl -X GET --location "http://127.0.0.1:3000"

curl -X GET --location "http://127.0.0.1:3000/nested-routes/bigid/open"

curl -X POST --location "http://127.0.0.1:3000/error/case3" \
    -H "content-type: application/json" \
    -d '{}'

curl -X GET --location "http://127.0.0.1:3000/error"

curl -X POST --location "http://127.0.0.1:3000/nested-routes" \
    -H "content-type: application/json" \
    -d '{}'

curl -X GET --location "http://127.0.0.1:3000/nested-routes"

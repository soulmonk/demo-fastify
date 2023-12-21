curl -X GET --location "http://127.0.0.1:3000/ping"
echo

curl -X GET --location "http://127.0.0.1:3000/nested-routes/bigid/open"
echo
curl -X GET --location "http://127.0.0.1:3000/nested-routes/bigid/open"
echo

curl -X POST --location "http://127.0.0.1:3000/error/case3" \
    -H "content-type: application/json" \
    -d '{}'
echo
curl -X GET --location "http://127.0.0.1:3000/error"
echo
curl -X GET --location "http://127.0.0.1:3000/nested-routes"

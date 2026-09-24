#!/usr/bin/env bash
echo "Content-Type: text/plain"
echo ""
name=$(echo "$QUERY_STRING" | cut -d "&" -f 1 | sed s/name=//g)
adresse=$(echo "$QUERY_STRING" | cut -d "&" -f 1 | sed s/adresse=//g)
nummer=$(echo "$QUERY_STRING" | cut -d "&" -f 1 | sed s/nummer=//g)

echo "
$name
$adresse
$nummer
------------------------------------------------
">>kontakt.csv


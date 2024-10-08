#!/bin/bash

echo "Finite job started"

# Number of times to run
RUNS=5
COUNT=1

while [ $COUNT -le $RUNS ]; do
    echo "Job execution $COUNT of $RUNS at $(date)"
    sleep 30
    ((COUNT++))
done

echo "Job completed all $RUNS executions"

SELECT race_id, race_name, distance, event_date FROM race;
SELECT runner_result_id, race_id, name, sex, age, city, state, place,
div_tot, div, bib_number, split_time, net_time, gun_time, pace
FROM runner_result ORDER BY age;


SELECT r.race_name, r.distance, COUNT(1)
FROM race r
JOIN runner_result rr
ON (rr.race_id = r.race_id)
GROUP BY r.race_name, r.distance;
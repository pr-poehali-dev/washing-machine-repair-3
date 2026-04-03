CREATE TABLE IF NOT EXISTS t_p34712235_washing_machine_repa.requests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
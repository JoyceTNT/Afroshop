-- Beispieldaten für die Produkttabelle
-- Ausführen (nach schema.sql): mariadb < database/sample-data.sql

USE afroshop;

INSERT INTO products (name, category, price, image) VALUES
  -- Haarpflege & Kosmetik
  ('DAX Pomade Super Light',                  'Haarpflege & Kosmetik', 19.99, '/img/DAX_pomade_super_light.png'),
  ('Comb Thru Extra Strength',                'Haarpflege & Kosmetik',  6.99, '/img/comb_thru_extra_streng.png'),
  ('Glow & Lovely',                           'Haarpflege & Kosmetik',  5.49, '/img/Glow_&_lovely.jpg'),
  ('ORS Olive Oil',                           'Haarpflege & Kosmetik', 10.99, '/img/ORS_olive_oil.jpg'),
  ('Optimum Care Anti-Breakage Therapy',      'Haarpflege & Kosmetik', 12.99, '/img/Optimum_car_anti_breakage_Therapy.jpg'),
  ('TCB Hair Relaxer Regular',                'Haarpflege & Kosmetik',  8.99, '/img/tcb_hair_relaxer_regular.jpg'),

  -- Getränke
  ('Capri-Sun',                               'Getränke',               0.99, '/img/Capri_sun.png'),
  ('Foco Coconut Juice',                      'Getränke',               1.79, '/img/foco_coconut_juice.jpg'),
  ('Gua Guavennektar',                        'Getränke',               2.29, '/img/Gua_Guavennektar.jpg'),
  ('Panchy Guave',                            'Getränke',               1.49, '/img/Panchy-Guave.jpg'),
  ('Vitamin C.C. Lemon',                      'Getränke',               1.99, '/img/vitamin_c.c._lemon.jpg'),
  ('Teatra Lemon Green Tea',                  'Getränke',               1.49, '/img/teatra_lemon_green_tea.jpg'),
  ('V Fresh Thai Tea',                        'Getränke',               1.69, '/img/v_Fresh_Thai_Tea.jpg'),
  ('Fitne Herbal Tee',                        'Getränke',              14.99, '/img/Fitne_herbal_tee.png'),
  ('Ingwer Tee von Hung Phat',                'Getränke',               3.49, '/img/Ingwer_tee_von_Hung_Phat.jpg'),
  ('Instant Ginger Tee',                      'Getränke',               3.99, '/img/Instant_ginger_tee.jpg'),

  -- Süßwaren & Snacks
  ('Dimes Sour Apple',                        'Süßwaren & Snacks',      4.99, '/img/dimes_sour_apple.jpg'),
  ('Dimes Mango',                             'Süßwaren & Snacks',      4.99, '/img/dimes_mango.jpg'),
  ('Chupa Chups Fraise',                      'Süßwaren & Snacks',      1.49, '/img/chupa_chups_fraise.jpg'),
  ('Chio Tortillas Hot Chili',                'Süßwaren & Snacks',      2.29, '/img/chio_tortillas_hot_chili.png'),
  ('Vinamit Banana Chips 250g',               'Süßwaren & Snacks',      3.99, '/img/Vinamit__Banana_chips_250g.jpg'),
  ('Sweet Tamarind',                          'Süßwaren & Snacks',      2.99, '/img/Sweet_Tamarind.jpg'),
  ('X.O Mango Slices in Syrup',               'Süßwaren & Snacks',      2.79, '/img/x.o_Mango_Slices_in_Syrup.jpg'),

  -- Lebensmittel
  ('Hühnerbrühe Pulver Knorr 900g',           'Lebensmittel',           2.49, '/img/Hühnerbrühe_Pulver_Knorr_900g.jpg'),
  ('Healthy Boy Thai Sweet Chili Sauce',      'Lebensmittel',           2.99, '/img/Healthy_Boy_thai_sweat_chili_sauce.jpg'),
  ('Kewpie Mayonnaise 500ml',                 'Lebensmittel',           5.99, '/img/Kewpie_Mayonnaise_500ml.jpg'),
  ('Lovely Millet Ground Bajra Flour 1kg',    'Lebensmittel',           3.49, '/img/Lovely_Millet_ground_Bajra_flour_1kg.jpg'),
  ('MP Sweet Beans 4kg',                      'Lebensmittel',          12.99, '/img/MP_sweat_beans_4kg.jpg'),
  ('Marhaba Powder',                          'Lebensmittel',           3.99, '/img/Marhaba_Powder.jpg'),
  ('Nestlé Golden Morn Mais & Soya Protein',  'Lebensmittel',           7.99, '/img/Nestle_Golden_Morn_Mais_&_Soya_Protein.jpg'),
  ('Royal Thai Jasmine Rice 4,5kg',           'Lebensmittel',          11.99, '/img/Royal_Thai_Jasmine_rice_4,5kg.jpg'),
  ('TOOBA Ginger Paste',                      'Lebensmittel',           2.49, '/img/TOOBA_ginger_paste.jpg'),
  ('Yellow Gari VoltaQueen 1kg',              'Lebensmittel',           4.49, '/img/Yellow_Gari_VoltaQueen_1kg.jpg');

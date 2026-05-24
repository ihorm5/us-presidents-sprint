const PRESIDENT_ROWS = [
  { number: 1, name: "George Washington" },
  { number: 2, name: "John Adams" },
  { number: 3, name: "Thomas Jefferson" },
  { number: 4, name: "James Madison" },
  { number: 5, name: "James Monroe" },
  { number: 6, name: "John Quincy Adams", aliases: ["jqa", "quincy adams"] },
  { number: 7, name: "Andrew Jackson" },
  { number: 8, name: "Martin Van Buren" },
  { number: 9, name: "William Henry Harrison", aliases: ["wh harrison"] },
  { number: 10, name: "John Tyler" },
  { number: 11, name: "James K. Polk", aliases: ["james polk", "jk polk"] },
  { number: 12, name: "Zachary Taylor" },
  { number: 13, name: "Millard Fillmore" },
  { number: 14, name: "Franklin Pierce" },
  { number: 15, name: "James Buchanan" },
  { number: 16, name: "Abraham Lincoln", aliases: ["abe lincoln"] },
  { number: 17, name: "Andrew Johnson" },
  { number: 18, name: "Ulysses S. Grant", aliases: ["ulysses grant", "us grant"] },
  { number: 19, name: "Rutherford B. Hayes", aliases: ["rutherford hayes"] },
  { number: 20, name: "James A. Garfield", aliases: ["james garfield"] },
  { number: 21, name: "Chester A. Arthur", aliases: ["chester arthur"] },
  { number: 22, name: "Grover Cleveland" },
  { number: 23, name: "Benjamin Harrison" },
  { number: 24, name: "Grover Cleveland" },
  { number: 25, name: "William McKinley" },
  { number: 26, name: "Theodore Roosevelt", aliases: ["theodore roosevelt", "teddy roosevelt", "tr"] },
  { number: 27, name: "William Howard Taft", aliases: ["william taft"] },
  { number: 28, name: "Woodrow Wilson" },
  { number: 29, name: "Warren G. Harding", aliases: ["warren harding"] },
  { number: 30, name: "Calvin Coolidge" },
  { number: 31, name: "Herbert Hoover" },
  { number: 32, name: "Franklin D. Roosevelt", aliases: ["franklin roosevelt", "fdr"] },
  { number: 33, name: "Harry S. Truman", aliases: ["harry truman"] },
  { number: 34, name: "Dwight D. Eisenhower", aliases: ["dwight eisenhower", "ike"] },
  { number: 35, name: "John F. Kennedy", aliases: ["john kennedy", "jfk"] },
  { number: 36, name: "Lyndon B. Johnson", aliases: ["lyndon johnson", "lbj"] },
  { number: 37, name: "Richard Nixon" },
  { number: 38, name: "Gerald Ford", aliases: ["jerry ford"] },
  { number: 39, name: "Jimmy Carter", aliases: ["james earl carter", "james carter"] },
  { number: 40, name: "Ronald Reagan" },
  { number: 41, name: "George H. W. Bush", aliases: ["george hw bush", "h w bush", "ghwb"] },
  { number: 42, name: "Bill Clinton", aliases: ["william clinton"] },
  { number: 43, name: "George W. Bush", aliases: ["george bush", "gwb", "george walker bush"] },
  { number: 44, name: "Barack Obama" },
  { number: 45, name: "Donald Trump", aliases: ["donald j trump"] },
  { number: 46, name: "Joe Biden", aliases: ["joseph biden", "joseph r biden"] },
  { number: 47, name: "Donald Trump", aliases: ["donald j trump"] }
];

const LAUREATE_ROWS = [
  { number: 1, name: "Сюллі-Прюдом", aliases: ["Sully Prudhomme", "Prudhomme"] },
  { number: 2, name: "Теодор Моммзен", aliases: ["Theodor Mommsen", "Mommsen"] },
  { number: 3, name: "Б'єрнстьєрне Б'єрнсон", aliases: ["Bjørnstjerne Bjørnson", "Bjørnson"] },
  { number: 4, name: "Фредерік Містраль", aliases: ["Frédéric Mistral", "Mistral"] },
  { number: 5, name: "Хосе Ечегарай-і-Ейсагірре", aliases: ["José Echegaray", "Echegaray"] },
  { number: 6, name: "Генрик Сенкевич", aliases: ["Henryk Sienkiewicz", "Sienkiewicz"] },
  { number: 7, name: "Джозуе Кардуччі", aliases: ["Giosuè Carducci", "Carducci"] },
  { number: 8, name: "Редьярд Кіплінг", aliases: ["Rudyard Kipling", "Kipling"] },
  { number: 9, name: "Рудольф Крістоф Ойкен", aliases: ["Rudolf Eucken", "Eucken"] },
  { number: 10, name: "Сельма Лагерлеф", aliases: ["Selma Lagerlöf", "Lagerlöf"] },
  { number: 11, name: "Пауль Гейзе", aliases: ["Paul Heyse", "Heyse"] },
  { number: 12, name: "Моріс Метерлінк", aliases: ["Maurice Maeterlinck", "Maeterlinck"] },
  { number: 13, name: "Ґергарт Гауптман", aliases: ["Gerhart Hauptmann", "Hauptmann"] },
  { number: 14, name: "Рабіндранат Тагор", aliases: ["Rabindranath Tagore", "Tagore"] },
  { number: 15, name: "Ромен Роллан", aliases: ["Romain Rolland", "Rolland"] },
  { number: 16, name: "Вернер фон Гейденстам", aliases: ["Verner von Heidenstam", "Heidenstam"] },
  { number: 17, name: "Карл Адольф Г'єллеруп", aliases: ["Karl Gjellerup", "Gjellerup"] },
  { number: 18, name: "Генрік Понтоппідан", aliases: ["Henrik Pontoppidan", "Pontoppidan"] },
  { number: 19, name: "Карл Шпіттелер", aliases: ["Carl Spitteler", "Spitteler"] },
  { number: 20, name: "Кнут Гамсун", aliases: ["Knut Hamsun", "Hamsun"] },
  { number: 21, name: "Анатоль Франс", aliases: ["Anatole France", "France"] },
  { number: 22, name: "Хасінто Бенавенте", aliases: ["Jacinto Benavente", "Benavente"] },
  { number: 23, name: "Вільям Батлер Єйтс", aliases: ["William Butler Yeats", "Yeats"] },
  { number: 24, name: "Владислав Реймонт", aliases: ["Władysław Reymont", "Reymont"] },
  { number: 25, name: "Бернард Шоу", aliases: ["George Bernard Shaw", "Shaw"] },
  { number: 26, name: "Грація Деледда", aliases: ["Grazia Deledda", "Deledda"] },
  { number: 27, name: "Анрі Бергсон", aliases: ["Henri Bergson", "Bergson"] },
  { number: 28, name: "Сігрід Унсет", aliases: ["Sigrid Undset", "Undset"] },
  { number: 29, name: "Томас Манн", aliases: ["Thomas Mann", "Mann"] },
  { number: 30, name: "Сінклер Льюїс", aliases: ["Sinclair Lewis", "Lewis"] },
  { number: 31, name: "Ерік Аксель Карлфельдт", aliases: ["Erik Axel Karlfeldt", "Karlfeldt"] },
  { number: 32, name: "Джон Голсуорсі", aliases: ["John Galsworthy", "Galsworthy"] },
  { number: 33, name: "Бунін Іван Олексійович", aliases: ["Ivan Bunin", "Bunin"] },
  { number: 34, name: "Луїджі Піранделло", aliases: ["Luigi Pirandello", "Pirandello"] },
  { number: 35, name: "Юджин О'Ніл", aliases: ["Eugene O'Neill", "O'Neill"] },
  { number: 36, name: "Роже Мартен дю Гар", aliases: ["Roger Martin du Gard", "Gard"] },
  { number: 37, name: "Перл Бак", aliases: ["Pearl Buck", "Buck"] },
  { number: 38, name: "Франс Ееміль Сіланпяя", aliases: ["Frans Eemil Sillanpää", "Sillanpää"] },
  { number: 39, name: "Йоганнес Вільгельм Єнсен", aliases: ["Johannes V. Jensen", "Jensen"] },
  { number: 40, name: "Габрієла Містраль", aliases: ["Gabriela Mistral", "Mistral"] },
  { number: 41, name: "Герман Гессе", aliases: ["Hermann Hesse", "Hesse"] },
  { number: 42, name: "Андре Жід", aliases: ["André Gide", "Gide"] },
  { number: 43, name: "Томас Стернз Еліот", aliases: ["T.S. Eliot", "Eliot"] },
  { number: 44, name: "Вільям Фолкнер", aliases: ["William Faulkner", "Faulkner"] },
  { number: 45, name: "Бертран Расселл", aliases: ["Bertrand Russell", "Russell"] },
  { number: 46, name: "Пер Лагерквіст", aliases: ["Pär Lagerkvist", "Lagerkvist"] },
  { number: 47, name: "Франсуа Моріак", aliases: ["François Mauriac", "Mauriac"] },
  { number: 48, name: "Вінстон Черчилль", aliases: ["Winston Churchill", "Churchill"] },
  { number: 49, name: "Ернест Гемінґвей", aliases: ["Ernest Hemingway", "Hemingway"] },
  { number: 50, name: "Галдор Лакснесс", aliases: ["Halldór Laxness", "Laxness"] },
  { number: 51, name: "Хуан Рамон Хіменес", aliases: ["Juan Ramón Jiménez", "Jiménez"] },
  { number: 52, name: "Альбер Камю", aliases: ["Albert Camus", "Camus"] },
  { number: 53, name: "Пастернак Борис Леонідович", aliases: ["Boris Pasternak", "Pasternak"] },
  { number: 54, name: "Сальваторе Квазімодо", aliases: ["Salvatore Quasimodo", "Quasimodo"] },
  { number: 55, name: "Сен-Жон Перс", aliases: ["Saint-John Perse", "Perse"] },
  { number: 56, name: "Іво Андрич", aliases: ["Ivo Andrić", "Andrić"] },
  { number: 57, name: "Джон Стейнбек", aliases: ["John Steinbeck", "Steinbeck"] },
  { number: 58, name: "Йоргос Сеферис", aliases: ["Giorgos Seferis", "Seferis"] },
  { number: 59, name: "Жан-Поль Сартр", aliases: ["Jean-Paul Sartre", "Sartre"] },
  { number: 60, name: "Шолохов Михайло Олександрович", aliases: ["Mikhail Sholokhov", "Sholokhov"] },
  { number: 61, name: "Шмуель Йосеф Агнон", aliases: ["Shmuel Agnon", "Agnon"] },
  { number: 62, name: "Неллі Закс", aliases: ["Nelly Sachs", "Sachs"] },
  { number: 63, name: "Мігель Анхель Астуріас", aliases: ["Miguel Angel Asturias", "Asturias"] },
  { number: 64, name: "Кавабата Ясунарі", aliases: ["Yasunari Kawabata", "Kawabata"] },
  { number: 65, name: "Семюел Бекет", aliases: ["Samuel Beckett", "Beckett"] },
  { number: 66, name: "Солженіцин Олександр Ісайович", aliases: ["Aleksandr Solzhenitsyn", "Solzhenitsyn"] },
  { number: 67, name: "Пабло Неруда", aliases: ["Pablo Neruda", "Neruda"] },
  { number: 68, name: "Генріх Белль", aliases: ["Heinrich Böll", "Böll"] },
  { number: 69, name: "Патрік Вайт", aliases: ["Patrick White", "White"] },
  { number: 70, name: "Ейвінд Юнсон", aliases: ["Eyvind Johnson", "Johnson"] },
  { number: 71, name: "Гаррі Мартінсон", aliases: ["Harry Martinson", "Martinson"] },
  { number: 72, name: "Еудженіо Монтале", aliases: ["Eugenio Montale", "Montale"] },
  { number: 73, name: "Сол Беллоу", aliases: ["Saul Bellow", "Bellow"] },
  { number: 74, name: "Вісенте Алейксандре", aliases: ["Vicente Aleixandre", "Aleixandre"] },
  { number: 75, name: "Іцхак Башевіс Зінґер", aliases: ["Isaac Bashevis Singer", "Singer"] },
  { number: 76, name: "Одіссеас Елітіс", aliases: ["Odysseus Elytis", "Elytis"] },
  { number: 77, name: "Чеслав Мілош", aliases: ["Czesław Miłosz", "Miłosz"] },
  { number: 78, name: "Еліас Канетті", aliases: ["Elias Canetti", "Canetti"] },
  { number: 79, name: "Габрієль Гарсія Маркес", aliases: ["Gabriel García Márquez", "Márquez"] },
  { number: 80, name: "Вільям Голдінг", aliases: ["William Golding", "Golding"] },
  { number: 81, name: "Ярослав Сайферт", aliases: ["Jaroslav Seifert", "Seifert"] },
  { number: 82, name: "Клод Сімон", aliases: ["Claude Simon", "Simon"] },
  { number: 83, name: "Воле Шоїнка", aliases: ["Wole Soyinka", "Soyinka"] },
  { number: 84, name: "Бродський Йосип Олександрович", aliases: ["Joseph Brodsky", "Brodsky"] },
  { number: 85, name: "Наґіб Махфуз", aliases: ["Naguib Mahfouz", "Mahfouz"] },
  { number: 86, name: "Каміло Хосе Села", aliases: ["Camilo José Cela", "Cela"] },
  { number: 87, name: "Октавіо Пас", aliases: ["Octavio Paz", "Paz"] },
  { number: 88, name: "Надін Гордімер", aliases: ["Nadine Gordimer", "Gordimer"] },
  { number: 89, name: "Дерек Волкотт", aliases: ["Derek Walcott", "Walcott"] },
  { number: 90, name: "Тоні Моррісон", aliases: ["Toni Morrison", "Morrison"] },
  { number: 91, name: "Ое Кендзабуро", aliases: ["Kenzaburo Oe", "Oe"] },
  { number: 92, name: "Шеймас Гіні", aliases: ["Seamus Heaney", "Heaney"] },
  { number: 93, name: "Віслава Шимборська", aliases: ["Wisława Szymborska", "Szymborska"] },
  { number: 94, name: "Даріо Фо", aliases: ["Dario Fo", "Fo"] },
  { number: 95, name: "Жозе Сарамагу", aliases: ["José Saramago", "Saramago"] },
  { number: 96, name: "Гюнтер Грасс", aliases: ["Günter Grass", "Grass"] },
  { number: 97, name: "Гао Сінцзянь", aliases: ["Gao Xingjian", "Xingjian"] },
  { number: 98, name: "Відьядхар Сураджпрасад Найпол", aliases: ["V. S. Naipaul", "Naipaul"] },
  { number: 99, name: "Імре Кертес", aliases: ["Imre Kertész", "Kertész"] },
  { number: 100, name: "Джон Максвелл Кутзее", aliases: ["J. M. Coetzee", "Coetzee"] },
  { number: 101, name: "Ельфріде Єлінек", aliases: ["Elfriede Jelinek", "Jelinek"] },
  { number: 102, name: "Гарольд Пінтер", aliases: ["Harold Pinter", "Pinter"] },
  { number: 103, name: "Орхан Памук", aliases: ["Orhan Pamuk", "Pamuk"] },
  { number: 104, name: "Доріс Лессінг", aliases: ["Doris Lessing", "Lessing"] },
  { number: 105, name: "Жан-Марі Гюстав Ле Клезіо", aliases: ["Jean-Marie Gustave Le Clézio", "Clézio"] },
  { number: 106, name: "Герта Мюллер", aliases: ["Herta Müller", "Müller"] },
  { number: 107, name: "Маріо Варгас Льйоса", aliases: ["Mario Vargas Llosa", "Llosa"] },
  { number: 108, name: "Томас Транстремер", aliases: ["Tomas Tranströmer", "Tranströmer"] },
  { number: 109, name: "Мо Янь", aliases: ["Mo Yan", "Yan"] },
  { number: 110, name: "Еліс Манро", aliases: ["Alice Munro", "Munro"] },
  { number: 111, name: "Патрік Модіано", aliases: ["Patrick Modiano", "Modiano"] },
  { number: 112, name: "Алексієвич Світлана Олександрівна", aliases: ["Svetlana Alexievich", "Alexievich"] },
  { number: 113, name: "Боб Ділан", aliases: ["Bob Dylan", "Dylan"] },
  { number: 114, name: "Ішіґуро Кадзуо", aliases: ["Kazuo Ishiguro", "Ishiguro"] },
  { number: 115, name: "Ольга Токарчук", aliases: ["Olga Tokarczuk", "Tokarczuk"] },
  { number: 116, name: "Петер Гандке", aliases: ["Peter Handke", "Handke"] },
  { number: 117, name: "Луїза Ґлік", aliases: ["Louise Glück", "Glück"] },
  { number: 118, name: "Абдулразак Гурна", aliases: ["Abdulrazak Gurnah", "Gurnah"] },
  { number: 119, name: "Анні Ерно", aliases: ["Annie Ernaux", "Ernaux"] },
  { number: 120, name: "Юн Фоссе", aliases: ["Jon Fosse", "Fosse"] },
  { number: 121, name: "Хан Ґан", aliases: ["Han Kang", "Kang"] },
  { number: 122, name: "Ласло Краснагоркаї", aliases: ["László Krasznahorkai", "Krasznahorkai"] }
];

const ELEMENT_ROWS = [
  { number: 1, symbol: "H", period: 1, group: 1, x: 1, y: 1, name: "Водень", aliases: ["Hydrogen"] },
  { number: 2, symbol: "He", period: 1, group: 18, x: 18, y: 1, name: "Гелій", aliases: ["Helium"] },
  { number: 3, symbol: "Li", period: 2, group: 1, x: 1, y: 2, name: "Літій", aliases: ["Lithium"] },
  { number: 4, symbol: "Be", period: 2, group: 2, x: 2, y: 2, name: "Берилій", aliases: ["Beryllium"] },
  { number: 5, symbol: "B", period: 2, group: 13, x: 13, y: 2, name: "Бор", aliases: ["Boron"] },
  { number: 6, symbol: "C", period: 2, group: 14, x: 14, y: 2, name: "Вуглець", aliases: ["Carbon"] },
  { number: 7, symbol: "N", period: 2, group: 15, x: 15, y: 2, name: "Азот", aliases: ["Nitrogen"] },
  { number: 8, symbol: "O", period: 2, group: 16, x: 16, y: 2, name: "Кисень", aliases: ["Oxygen"] },
  { number: 9, symbol: "F", period: 2, group: 17, x: 17, y: 2, name: "Фтор", aliases: ["Fluorine"] },
  { number: 10, symbol: "Ne", period: 2, group: 18, x: 18, y: 2, name: "Неон", aliases: ["Neon"] },
  { number: 11, symbol: "Na", period: 3, group: 1, x: 1, y: 3, name: "Натрій", aliases: ["Sodium"] },
  { number: 12, symbol: "Mg", period: 3, group: 2, x: 2, y: 3, name: "Магній", aliases: ["Magnesium"] },
  { number: 13, symbol: "Al", period: 3, group: 13, x: 13, y: 3, name: "Алюміній", aliases: ["Aluminium"] },
  { number: 14, symbol: "Si", period: 3, group: 14, x: 14, y: 3, name: "Кремній", aliases: ["Silicon"] },
  { number: 15, symbol: "P", period: 3, group: 15, x: 15, y: 3, name: "Фосфор", aliases: ["Phosphorus"] },
  { number: 16, symbol: "S", period: 3, group: 16, x: 16, y: 3, name: "Сірка", aliases: ["Sulfur"] },
  { number: 17, symbol: "Cl", period: 3, group: 17, x: 17, y: 3, name: "Хлор", aliases: ["Chlorine"] },
  { number: 18, symbol: "Ar", period: 3, group: 18, x: 18, y: 3, name: "Аргон", aliases: ["Argon"] },
  { number: 19, symbol: "K", period: 4, group: 1, x: 1, y: 4, name: "Калій", aliases: ["Potassium"] },
  { number: 20, symbol: "Ca", period: 4, group: 2, x: 2, y: 4, name: "Кальцій", aliases: ["Calcium"] },
  { number: 21, symbol: "Sc", period: 4, group: 3, x: 3, y: 4, name: "Скандій", aliases: ["Scandium"] },
  { number: 22, symbol: "Ti", period: 4, group: 4, x: 4, y: 4, name: "Титан (хімічний елемент)", aliases: ["Titanium"] },
  { number: 23, symbol: "V", period: 4, group: 5, x: 5, y: 4, name: "Ванадій", aliases: ["Vanadium"] },
  { number: 24, symbol: "Cr", period: 4, group: 6, x: 6, y: 4, name: "Хром", aliases: ["Chromium"] },
  { number: 25, symbol: "Mn", period: 4, group: 7, x: 7, y: 4, name: "Манган", aliases: ["Manganese"] },
  { number: 26, symbol: "Fe", period: 4, group: 8, x: 8, y: 4, name: "Залізо", aliases: ["Iron"] },
  { number: 27, symbol: "Co", period: 4, group: 9, x: 9, y: 4, name: "Кобальт", aliases: ["Cobalt"] },
  { number: 28, symbol: "Ni", period: 4, group: 10, x: 10, y: 4, name: "Нікель", aliases: ["Nickel"] },
  { number: 29, symbol: "Cu", period: 4, group: 11, x: 11, y: 4, name: "Мідь", aliases: ["Copper"] },
  { number: 30, symbol: "Zn", period: 4, group: 12, x: 12, y: 4, name: "Цинк", aliases: ["Zinc"] },
  { number: 31, symbol: "Ga", period: 4, group: 13, x: 13, y: 4, name: "Галій", aliases: ["Gallium"] },
  { number: 32, symbol: "Ge", period: 4, group: 14, x: 14, y: 4, name: "Германій", aliases: ["Germanium"] },
  { number: 33, symbol: "As", period: 4, group: 15, x: 15, y: 4, name: "Арсен", aliases: ["Arsenic"] },
  { number: 34, symbol: "Se", period: 4, group: 16, x: 16, y: 4, name: "Селен", aliases: ["Selenium"] },
  { number: 35, symbol: "Br", period: 4, group: 17, x: 17, y: 4, name: "Бром", aliases: ["Bromine"] },
  { number: 36, symbol: "Kr", period: 4, group: 18, x: 18, y: 4, name: "Криптон", aliases: ["Krypton"] },
  { number: 37, symbol: "Rb", period: 5, group: 1, x: 1, y: 5, name: "Рубідій", aliases: ["Rubidium"] },
  { number: 38, symbol: "Sr", period: 5, group: 2, x: 2, y: 5, name: "Стронцій", aliases: ["Strontium"] },
  { number: 39, symbol: "Y", period: 5, group: 3, x: 3, y: 5, name: "Ітрій", aliases: ["Yttrium"] },
  { number: 40, symbol: "Zr", period: 5, group: 4, x: 4, y: 5, name: "Цирконій", aliases: ["Zirconium"] },
  { number: 41, symbol: "Nb", period: 5, group: 5, x: 5, y: 5, name: "Ніобій", aliases: ["Niobium"] },
  { number: 42, symbol: "Mo", period: 5, group: 6, x: 6, y: 5, name: "Молібден", aliases: ["Molybdenum"] },
  { number: 43, symbol: "Tc", period: 5, group: 7, x: 7, y: 5, name: "Технецій", aliases: ["Technetium"] },
  { number: 44, symbol: "Ru", period: 5, group: 8, x: 8, y: 5, name: "Рутеній", aliases: ["Ruthenium"] },
  { number: 45, symbol: "Rh", period: 5, group: 9, x: 9, y: 5, name: "Родій", aliases: ["Rhodium"] },
  { number: 46, symbol: "Pd", period: 5, group: 10, x: 10, y: 5, name: "Паладій", aliases: ["Palladium"] },
  { number: 47, symbol: "Ag", period: 5, group: 11, x: 11, y: 5, name: "Срібло", aliases: ["Silver"] },
  { number: 48, symbol: "Cd", period: 5, group: 12, x: 12, y: 5, name: "Кадмій", aliases: ["Cadmium"] },
  { number: 49, symbol: "In", period: 5, group: 13, x: 13, y: 5, name: "Індій", aliases: ["Indium"] },
  { number: 50, symbol: "Sn", period: 5, group: 14, x: 14, y: 5, name: "Олово", aliases: ["Tin"] },
  { number: 51, symbol: "Sb", period: 5, group: 15, x: 15, y: 5, name: "Стибій", aliases: ["Antimony"] },
  { number: 52, symbol: "Te", period: 5, group: 16, x: 16, y: 5, name: "Телур", aliases: ["Tellurium"] },
  { number: 53, symbol: "I", period: 5, group: 17, x: 17, y: 5, name: "Йод", aliases: ["Iodine"] },
  { number: 54, symbol: "Xe", period: 5, group: 18, x: 18, y: 5, name: "Ксенон", aliases: ["Xenon"] },
  { number: 55, symbol: "Cs", period: 6, group: 1, x: 1, y: 6, name: "Цезій", aliases: ["Cesium"] },
  { number: 56, symbol: "Ba", period: 6, group: 2, x: 2, y: 6, name: "Барій", aliases: ["Barium"] },
  { number: 57, symbol: "La", period: 6, group: 3, x: 3, y: 9, name: "Лантан", aliases: ["Lanthanum"] },
  { number: 58, symbol: "Ce", period: 6, group: 3, x: 4, y: 9, name: "Церій", aliases: ["Cerium"] },
  { number: 59, symbol: "Pr", period: 6, group: 3, x: 5, y: 9, name: "Празеодим", aliases: ["Praseodymium"] },
  { number: 60, symbol: "Nd", period: 6, group: 3, x: 6, y: 9, name: "Неодим", aliases: ["Neodymium"] },
  { number: 61, symbol: "Pm", period: 6, group: 3, x: 7, y: 9, name: "Прометій", aliases: ["Promethium"] },
  { number: 62, symbol: "Sm", period: 6, group: 3, x: 8, y: 9, name: "Самарій", aliases: ["Samarium"] },
  { number: 63, symbol: "Eu", period: 6, group: 3, x: 9, y: 9, name: "Європій", aliases: ["Europium"] },
  { number: 64, symbol: "Gd", period: 6, group: 3, x: 10, y: 9, name: "Гадоліній", aliases: ["Gadolinium"] },
  { number: 65, symbol: "Tb", period: 6, group: 3, x: 11, y: 9, name: "Тербій", aliases: ["Terbium"] },
  { number: 66, symbol: "Dy", period: 6, group: 3, x: 12, y: 9, name: "Диспрозій", aliases: ["Dysprosium"] },
  { number: 67, symbol: "Ho", period: 6, group: 3, x: 13, y: 9, name: "Гольмій", aliases: ["Holmium"] },
  { number: 68, symbol: "Er", period: 6, group: 3, x: 14, y: 9, name: "Ербій", aliases: ["Erbium"] },
  { number: 69, symbol: "Tm", period: 6, group: 3, x: 15, y: 9, name: "Тулій", aliases: ["Thulium"] },
  { number: 70, symbol: "Yb", period: 6, group: 3, x: 16, y: 9, name: "Ітербій", aliases: ["Ytterbium"] },
  { number: 71, symbol: "Lu", period: 6, group: 3, x: 17, y: 9, name: "Лютецій", aliases: ["Lutetium"] },
  { number: 72, symbol: "Hf", period: 6, group: 4, x: 4, y: 6, name: "Гафній", aliases: ["Hafnium"] },
  { number: 73, symbol: "Ta", period: 6, group: 5, x: 5, y: 6, name: "Тантал (хімічний елемент)", aliases: ["Tantalum"] },
  { number: 74, symbol: "W", period: 6, group: 6, x: 6, y: 6, name: "Вольфрам", aliases: ["Tungsten"] },
  { number: 75, symbol: "Re", period: 6, group: 7, x: 7, y: 6, name: "Реній", aliases: ["Rhenium"] },
  { number: 76, symbol: "Os", period: 6, group: 8, x: 8, y: 6, name: "Осмій", aliases: ["Osmium"] },
  { number: 77, symbol: "Ir", period: 6, group: 9, x: 9, y: 6, name: "Іридій", aliases: ["Iridium"] },
  { number: 78, symbol: "Pt", period: 6, group: 10, x: 10, y: 6, name: "Платина", aliases: ["Platinum"] },
  { number: 79, symbol: "Au", period: 6, group: 11, x: 11, y: 6, name: "Золото", aliases: ["Gold"] },
  { number: 80, symbol: "Hg", period: 6, group: 12, x: 12, y: 6, name: "Ртуть", aliases: ["Mercury"] },
  { number: 81, symbol: "Tl", period: 6, group: 13, x: 13, y: 6, name: "Талій", aliases: ["Thallium"] },
  { number: 82, symbol: "Pb", period: 6, group: 14, x: 14, y: 6, name: "Свинець", aliases: ["Lead"] },
  { number: 83, symbol: "Bi", period: 6, group: 15, x: 15, y: 6, name: "Бісмут", aliases: ["Bismuth"] },
  { number: 84, symbol: "Po", period: 6, group: 16, x: 16, y: 6, name: "Полоній", aliases: ["Polonium"] },
  { number: 85, symbol: "At", period: 6, group: 17, x: 17, y: 6, name: "Астат", aliases: ["Astatine"] },
  { number: 86, symbol: "Rn", period: 6, group: 18, x: 18, y: 6, name: "Радон", aliases: ["Radon"] },
  { number: 87, symbol: "Fr", period: 7, group: 1, x: 1, y: 7, name: "Францій", aliases: ["Francium"] },
  { number: 88, symbol: "Ra", period: 7, group: 2, x: 2, y: 7, name: "Радій", aliases: ["Radium"] },
  { number: 89, symbol: "Ac", period: 7, group: 3, x: 3, y: 10, name: "Актиній", aliases: ["Actinium"] },
  { number: 90, symbol: "Th", period: 7, group: 3, x: 4, y: 10, name: "Торій", aliases: ["Thorium"] },
  { number: 91, symbol: "Pa", period: 7, group: 3, x: 5, y: 10, name: "Протактиній", aliases: ["Protactinium"] },
  { number: 92, symbol: "U", period: 7, group: 3, x: 6, y: 10, name: "Уран (хімічний елемент)", aliases: ["Uranium"] },
  { number: 93, symbol: "Np", period: 7, group: 3, x: 7, y: 10, name: "Нептуній", aliases: ["Neptunium"] },
  { number: 94, symbol: "Pu", period: 7, group: 3, x: 8, y: 10, name: "Плутоній", aliases: ["Plutonium"] },
  { number: 95, symbol: "Am", period: 7, group: 3, x: 9, y: 10, name: "Америцій", aliases: ["Americium"] },
  { number: 96, symbol: "Cm", period: 7, group: 3, x: 10, y: 10, name: "Кюрій", aliases: ["Curium"] },
  { number: 97, symbol: "Bk", period: 7, group: 3, x: 11, y: 10, name: "Берклій", aliases: ["Berkelium"] },
  { number: 98, symbol: "Cf", period: 7, group: 3, x: 12, y: 10, name: "Каліфорній", aliases: ["Californium"] },
  { number: 99, symbol: "Es", period: 7, group: 3, x: 13, y: 10, name: "Ейнштейній", aliases: ["Einsteinium"] },
  { number: 100, symbol: "Fm", period: 7, group: 3, x: 14, y: 10, name: "Фермій", aliases: ["Fermium"] },
  { number: 101, symbol: "Md", period: 7, group: 3, x: 15, y: 10, name: "Менделевій", aliases: ["Mendelevium"] },
  { number: 102, symbol: "No", period: 7, group: 3, x: 16, y: 10, name: "Нобелій", aliases: ["Nobelium"] },
  { number: 103, symbol: "Lr", period: 7, group: 3, x: 17, y: 10, name: "Лоуренсій", aliases: ["Lawrencium"] },
  { number: 104, symbol: "Rf", period: 7, group: 4, x: 4, y: 7, name: "Резерфордій", aliases: ["Rutherfordium"] },
  { number: 105, symbol: "Db", period: 7, group: 5, x: 5, y: 7, name: "Дубній", aliases: ["Dubnium"] },
  { number: 106, symbol: "Sg", period: 7, group: 6, x: 6, y: 7, name: "Сіборгій", aliases: ["Seaborgium"] },
  { number: 107, symbol: "Bh", period: 7, group: 7, x: 7, y: 7, name: "Борій", aliases: ["Bohrium"] },
  { number: 108, symbol: "Hs", period: 7, group: 8, x: 8, y: 7, name: "Гасій", aliases: ["Hassium"] },
  { number: 109, symbol: "Mt", period: 7, group: 9, x: 9, y: 7, name: "Майтнерій", aliases: ["Meitnerium"] },
  { number: 110, symbol: "Ds", period: 7, group: 10, x: 10, y: 7, name: "Дармштадтій", aliases: ["Darmstadtium"] },
  { number: 111, symbol: "Rg", period: 7, group: 11, x: 11, y: 7, name: "Рентгеній", aliases: ["Roentgenium"] },
  { number: 112, symbol: "Cn", period: 7, group: 12, x: 12, y: 7, name: "Коперницій", aliases: ["Copernicium"] },
  { number: 113, symbol: "Nh", period: 7, group: 13, x: 13, y: 7, name: "Ніхоній", aliases: ["Nihonium"] },
  { number: 114, symbol: "Fl", period: 7, group: 14, x: 14, y: 7, name: "Флеровій", aliases: ["Flerovium"] },
  { number: 115, symbol: "Mc", period: 7, group: 15, x: 15, y: 7, name: "Московій", aliases: ["Moscovium"] },
  { number: 116, symbol: "Lv", period: 7, group: 16, x: 16, y: 7, name: "Ліверморій", aliases: ["Livermorium"] },
  { number: 117, symbol: "Ts", period: 7, group: 17, x: 17, y: 7, name: "Теннессин", aliases: ["Tennessine"] },
  { number: 118, symbol: "Og", period: 7, group: 18, x: 18, y: 7, name: "Оґанесон", aliases: ["Oganesson"] }
];

const GAME_STATUS = Object.freeze({
  running: "running",
  won: "won",
  resigned: "resigned"
});
const GAME_MODES = Object.freeze({
  presidents: "presidents",
  literature: "literature",
  elements: "elements"
});
const BOARD_TYPES = Object.freeze({
  list: "list",
  periodic: "periodic"
});
const DEFAULT_GAME_MODE = GAME_MODES.presidents;
const GAME_CONFIG = Object.freeze({
  [GAME_MODES.presidents]: {
    title: "Name Every U.S. President",
    subtitle: "Type one name at a time. Autocomplete appears for strong surname matches.",
    placeholder: "Try: Lincoln",
    shareLabel: "U.S. Presidents Sprint",
    boardType: BOARD_TYPES.list,
    rows: PRESIDENT_ROWS
  },
  [GAME_MODES.literature]: {
    title: "Назви всіх лауреатів Нобелівської премії з літератури",
    subtitle: "Вводь по одному імені. Підказки зʼявляються для точних збігів прізвищ.",
    placeholder: "Спробуй: Хемінгуей",
    shareLabel: "Нобелівська літературна вікторина",
    boardType: BOARD_TYPES.list,
    rows: LAUREATE_ROWS
  },
  [GAME_MODES.elements]: {
    title: "Назви всі хімічні елементи",
    subtitle: "Натисни елемент у таблиці, введи його назву. Зараховується тільки правильний порядок (1 → 118).",
    placeholder: "Спробуй: Водень",
    shareLabel: "Хімічні елементи Sprint",
    boardType: BOARD_TYPES.periodic,
    rows: ELEMENT_ROWS
  }
});
const MIN_AUTOCOMPLETE_LASTNAME_LENGTH = 5;

let activeMode = DEFAULT_GAME_MODE;
let totalRows = 0;
let rowsWithKeys = [];
let people = new Map();
let aliasToKeys = new Map();
let rowsByNumber = new Map();

const state = {
  foundKeys: new Set(),
  status: GAME_STATUS.running,
  startedAtMs: 0,
  elapsedMs: 0,
  timerIntervalId: null,
  selectedElementNumber: null
};

const elements = {
  form: document.getElementById("guess-form"),
  submit: document.querySelector('#guess-form button[type="submit"]'),
  input: document.getElementById("guess-input"),
  suggestions: document.getElementById("suggestions"),
  feedback: document.getElementById("feedback"),
  progress: document.getElementById("progress-text"),
  timer: document.getElementById("timer-text"),
  list: document.getElementById("game-rows"),
  periodicBoard: document.getElementById("periodic-board"),
  resign: document.getElementById("resign-button"),
  share: document.getElementById("share-button"),
  reset: document.getElementById("reset-button"),
  modeSelect: document.getElementById("mode-select"),
  gameTitle: document.getElementById("game-title"),
  gameSubtitle: document.getElementById("game-subtitle")
};

const rowElementsByNumber = new Map();

bindEvents();
setActiveMode(activeMode);

function setActiveMode(nextMode) {
  const config = GAME_CONFIG[nextMode];
  if (!config) {
    return;
  }

  activeMode = nextMode;
  rowsWithKeys = config.rows.map((row) => ({
    ...row,
    key: normalizeName(row.name)
  }));
  totalRows = rowsWithKeys.length;
  rowsByNumber = new Map(rowsWithKeys.map((row) => [row.number, row]));
  people = buildPeople(rowsWithKeys);
  aliasToKeys = buildAliasIndex(people);
  state.selectedElementNumber = null;

  applyGameMeta(config);
  renderRows();
  startNewGame("Game started.");
}

function getActiveGameConfig() {
  return GAME_CONFIG[activeMode];
}

function isElementsMode() {
  return getActiveGameConfig().boardType === BOARD_TYPES.periodic;
}

function nextExpectedElementNumber() {
  return countFilledRows() + 1;
}

function applyGameMeta(config) {
  if (elements.modeSelect) {
    elements.modeSelect.value = activeMode;
  }
  if (elements.gameTitle) {
    elements.gameTitle.textContent = config.title;
  }
  if (elements.gameSubtitle) {
    elements.gameSubtitle.textContent = config.subtitle;
  }
  if (elements.input) {
    elements.input.placeholder = config.placeholder;
  }
}

function bindEvents() {
  elements.form.addEventListener("submit", handleSubmit);
  elements.input.addEventListener("input", handleInput);
  elements.resign.addEventListener("click", resignGame);
  elements.share.addEventListener("click", shareResult);
  elements.reset.addEventListener("click", resetGame);
  if (elements.modeSelect) {
    elements.modeSelect.addEventListener("change", () => {
      setActiveMode(elements.modeSelect.value);
    });
  }
  document.addEventListener("click", (event) => {
    if (!elements.suggestions.contains(event.target) && event.target !== elements.input) {
      clearSuggestions();
    }
  });
}

function renderRows() {
  if (isElementsMode()) {
    renderPeriodicBoard();
    return;
  }

  renderListBoard();
}

function renderListBoard() {
  elements.list.classList.remove("is-hidden");
  elements.periodicBoard.classList.remove("is-visible");

  const fragment = document.createDocumentFragment();
  rowElementsByNumber.clear();

  rowsWithKeys.forEach((row) => {
    const li = document.createElement("li");
    li.className = "row";
    li.dataset.key = row.key;
    li.dataset.number = String(row.number);
    li.innerHTML = `<span class="row-number">${row.number}.</span><span class="row-name">empty</span>`;
    rowElementsByNumber.set(row.number, li);
    fragment.appendChild(li);
  });

  elements.list.replaceChildren(fragment);
}

function renderPeriodicBoard() {
  elements.list.classList.add("is-hidden");
  elements.periodicBoard.classList.add("is-visible");

  const grid = document.createElement("div");
  grid.className = "periodic-grid";
  rowElementsByNumber.clear();

  rowsWithKeys.forEach((row) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "element-cell";
    button.style.gridColumn = String(row.x);
    button.style.gridRow = String(row.y);
    button.dataset.number = String(row.number);
    button.dataset.key = row.key;
    button.innerHTML = `<span class="element-number">${row.number}</span><span class="element-symbol">${row.symbol}</span>`;

    if (state.foundKeys.has(row.key)) {
      button.classList.add("is-found");
    } else if (state.status !== GAME_STATUS.running) {
      button.classList.add("is-revealed");
    }

    if (state.selectedElementNumber === row.number) {
      button.classList.add("is-selected");
    }

    button.addEventListener("click", () => {
      selectElement(row.number);
    });

    rowElementsByNumber.set(row.number, button);
    grid.appendChild(button);
  });

  elements.periodicBoard.replaceChildren(grid);
}

function selectElement(number) {
  if (!isElementsMode() || !isGameRunning()) {
    return;
  }

  state.selectedElementNumber = number;
  renderPeriodicBoard();

  const row = rowsByNumber.get(number);
  const nextExpected = nextExpectedElementNumber();
  if (!row) {
    return;
  }

  if (number !== nextExpected) {
    setFeedback(`Спочатку заповни елемент №${nextExpected}.`);
    return;
  }

  setFeedback(`Вибрано №${number} (${row.symbol}). Введи назву елемента.`);
}

function handleInput() {
  if (!isGameRunning()) {
    clearSuggestions();
    return;
  }

  if (isElementsMode()) {
    clearSuggestions();
    return;
  }

  const normalizedInput = normalizeName(elements.input.value);
  if (!normalizedInput) {
    clearSuggestions();
    setFeedback("");
    return;
  }

  const lastNameQuery = extractLastToken(normalizedInput);
  if (!shouldOfferAutocomplete(lastNameQuery)) {
    clearSuggestions();
    return;
  }

  const candidates = rankAutocompleteCandidates(lastNameQuery).slice(0, 5);
  renderSuggestions(candidates, lastNameQuery);
}

function handleSubmit(event) {
  event.preventDefault();

  if (!isGameRunning()) {
    setFeedback("Game is not running. Press Reset to start a new run.");
    return;
  }

  const rawGuess = elements.input.value.trim();
  if (!rawGuess) {
    return;
  }

  if (isElementsMode()) {
    handleElementSubmit(rawGuess);
    return;
  }

  const outcome = resolveGuess(rawGuess);

  if (outcome.type === "matched") {
    if (fillPresident(outcome.key)) {
      elements.input.value = "";
      clearSuggestions();
      elements.input.focus();
    }
    return;
  }

  if (outcome.type === "already-guessed") {
    setFeedback(`${outcome.name} is already filled.`);
    return;
  }

  if (outcome.type === "ambiguous") {
    setFeedback(`Need a bit more detail: ${outcome.options.join(" or ")}.`);
    return;
  }

  setFeedback("No close match found. Try a fuller name.");
}

function handleElementSubmit(rawGuess) {
  if (state.selectedElementNumber === null) {
    setFeedback("Спочатку натисни елемент у таблиці.");
    return;
  }

  const selectedRow = rowsByNumber.get(state.selectedElementNumber);
  if (!selectedRow) {
    setFeedback("Елемент не знайдено.");
    return;
  }

  const expectedNumber = nextExpectedElementNumber();
  if (selectedRow.number !== expectedNumber) {
    setFeedback(`Неправильний порядок: зараз потрібен елемент №${expectedNumber}.`);
    return;
  }

  const normalizedGuess = normalizeName(rawGuess);
  const aliases = new Set([selectedRow.name, ...(selectedRow.aliases || [])]);
  const normalizedAliases = [...aliases].map((alias) => normalizeName(alias));
  if (!normalizedAliases.includes(normalizedGuess)) {
    setFeedback(`Ні, для №${selectedRow.number} це має бути "${selectedRow.name}".`);
    return;
  }

  if (!fillPresident(selectedRow.key)) {
    return;
  }

  elements.input.value = "";
  clearSuggestions();
  state.selectedElementNumber = null;
  if (isElementsMode()) {
    renderPeriodicBoard();
  }
  elements.input.focus();
}

function resolveGuess(rawGuess) {
  const normalized = normalizeName(rawGuess);
  if (!normalized) {
    return { type: "none" };
  }

  const exactKeys = aliasToKeys.get(normalized);
  if (exactKeys) {
    const remaining = [...exactKeys].filter((key) => !state.foundKeys.has(key));
    if (remaining.length === 1) {
      return { type: "matched", key: remaining[0] };
    }
    if (remaining.length === 0) {
      const key = [...exactKeys][0];
      return { type: "already-guessed", name: people.get(key).name };
    }
    return {
      type: "ambiguous",
      options: remaining.map((key) => people.get(key).name)
    };
  }

  const ranked = rankCandidates(normalized, {
    maxDistance: fuzzyThreshold(normalized.length),
    allowContains: true
  });
  if (ranked.length === 0) {
    return { type: "none" };
  }

  const best = ranked[0];
  const second = ranked[1];
  const maxDistance = fuzzyThreshold(normalized.length);
  const clearWinner = !second || best.distance + 1 < second.distance || best.normalized + 0.13 < second.normalized;
  const closeEnough = best.distance <= maxDistance && best.normalized <= 0.33;

  if (closeEnough && clearWinner) {
    return { type: "matched", key: best.key };
  }

  if (best.distance <= maxDistance + 1 && best.normalized <= 0.4) {
    setFeedback(`Did you mean ${best.name}? Select it from suggestions or type more.`);
    return { type: "none" };
  }

  return { type: "none" };
}

function rankCandidates(query, options = {}) {
  const {
    maxDistance = fuzzyThreshold(query.length) + 2,
    allowContains = true
  } = options;
  const candidates = [];

  for (const person of people.values()) {
    if (state.foundKeys.has(person.key)) {
      continue;
    }

    let bestScore = null;
    for (const alias of person.aliases) {
      const score = scoreAlias(query, alias, { maxDistance, allowContains });
      if (!score) {
        continue;
      }
      if (!bestScore || compareScores(score, bestScore) < 0) {
        bestScore = score;
      }
    }

    if (!bestScore) {
      continue;
    }

    candidates.push({
      key: person.key,
      name: person.name,
      rows: person.rows,
      distance: bestScore.distance,
      normalized: bestScore.normalized,
      startsWith: bestScore.startsWith
    });
  }

  return candidates.sort((a, b) => {
    if (a.startsWith !== b.startsWith) {
      return a.startsWith ? -1 : 1;
    }
    if (a.distance !== b.distance) {
      return a.distance - b.distance;
    }
    if (a.normalized !== b.normalized) {
      return a.normalized - b.normalized;
    }
    return a.name.localeCompare(b.name);
  });
}

function rankAutocompleteCandidates(lastNameQuery) {
  const maxDistance = autocompleteDistanceLimit(lastNameQuery.length);
  const candidates = [];

  for (const person of people.values()) {
    if (state.foundKeys.has(person.key)) {
      continue;
    }

    let bestScore = null;
    for (const alias of person.aliases) {
      const score = scoreLastNameAutocomplete(lastNameQuery, alias, maxDistance);
      if (!score) {
        continue;
      }
      if (!bestScore || compareScores(score, bestScore) < 0) {
        bestScore = score;
      }
    }

    if (!bestScore) {
      continue;
    }

    candidates.push({
      key: person.key,
      name: person.name,
      rows: person.rows,
      distance: bestScore.distance,
      normalized: bestScore.normalized,
      startsWith: bestScore.startsWith
    });
  }

  return candidates.sort((a, b) => {
    if (a.distance !== b.distance) {
      return a.distance - b.distance;
    }
    if (a.normalized !== b.normalized) {
      return a.normalized - b.normalized;
    }
    return a.name.localeCompare(b.name);
  });
}

function scoreAlias(query, alias, options = {}) {
  if (query.length < 2) {
    return null;
  }

  const {
    maxDistance = fuzzyThreshold(query.length) + 2,
    allowContains = true
  } = options;

  const startsWith = alias.startsWith(query);
  const distance = levenshtein(query, alias);
  const normalized = distance / Math.max(query.length, alias.length);
  const contains = allowContains && alias.includes(query);
  const accepted = distance <= maxDistance || contains;

  if (!accepted) {
    return null;
  }

  return { distance, normalized, startsWith };
}

function scoreLastNameAutocomplete(lastNameQuery, alias, maxDistance) {
  const aliasLastName = extractLastToken(alias);
  if (!aliasLastName || aliasLastName.length < lastNameQuery.length) {
    return null;
  }

  const aliasPrefix = aliasLastName.slice(0, lastNameQuery.length);
  const distance = manhattanDistance(lastNameQuery, aliasPrefix);
  if (distance > maxDistance) {
    return null;
  }

  return {
    distance,
    normalized: distance / lastNameQuery.length,
    startsWith: distance === 0
  };
}

function renderSuggestions(candidates, lastNameQuery = "") {
  const currentLastNameQuery = extractLastToken(normalizeName(elements.input.value));
  if (
    !lastNameQuery ||
    !shouldOfferAutocomplete(currentLastNameQuery) ||
    currentLastNameQuery !== lastNameQuery
  ) {
    clearSuggestions();
    return;
  }

  if (candidates.length === 0) {
    clearSuggestions();
    return;
  }

  const fragment = document.createDocumentFragment();
  candidates.forEach((candidate) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const rowLabel = candidate.rows.length > 1 ? `#${candidate.rows.join(" / #")}` : `#${candidate.rows[0]}`;
    button.type = "button";
    button.className = "suggestion-button";
    button.textContent = `${candidate.name} (${rowLabel})`;
    button.addEventListener("click", () => {
      if (fillPresident(candidate.key)) {
        elements.input.value = "";
        clearSuggestions();
        elements.input.focus();
      }
    });
    li.appendChild(button);
    fragment.appendChild(li);
  });

  elements.suggestions.replaceChildren(fragment);
  elements.suggestions.classList.add("is-visible");
}

function clearSuggestions() {
  elements.suggestions.classList.remove("is-visible");
  elements.suggestions.replaceChildren();
}

function fillPresident(key) {
  if (!isGameRunning() || state.foundKeys.has(key)) {
    return false;
  }

  const person = people.get(key);
  if (!person) {
    return false;
  }

  state.foundKeys.add(key);

  if (isElementsMode()) {
    const selectedRow = rowsWithKeys.find((row) => row.key === key);
    if (selectedRow) {
      const cell = rowElementsByNumber.get(selectedRow.number);
      if (cell) {
        cell.classList.add("is-found");
        cell.classList.remove("is-selected");
      }
      setFeedback(`Заповнено елемент №${selectedRow.number}: ${selectedRow.name}.`);
    }
    updateProgress();
    if (countFilledRows() === totalRows) {
      endGame(GAME_STATUS.won);
      return true;
    }
    return true;
  }

  person.rows.forEach((rowNumber) => {
    const rowElement = rowElementsByNumber.get(rowNumber);
    if (!rowElement) {
      return;
    }
    rowElement.classList.add("is-found");
    const nameCell = rowElement.querySelector(".row-name");
    if (nameCell) {
      nameCell.textContent = person.name;
    }
  });

  updateProgress();
  const rowText = person.rows.length > 1 ? `rows ${person.rows.join(" and ")}` : `row ${person.rows[0]}`;
  setFeedback(`Filled ${rowText}: ${person.name}.`);

  if (countFilledRows() === totalRows) {
    endGame(GAME_STATUS.won);
    return true;
  }

  return true;
}

function resignGame() {
  if (!isGameRunning()) {
    return;
  }
  endGame(GAME_STATUS.resigned);
}

function resetGame() {
  state.selectedElementNumber = null;
  rowElementsByNumber.forEach((rowElement) => {
    rowElement.classList.remove("is-found");
    rowElement.classList.remove("is-selected");
    rowElement.classList.remove("is-revealed");
    const nameCell = rowElement.querySelector(".row-name");
    if (nameCell) {
      nameCell.textContent = "empty";
    }
  });

  startNewGame("Game reset.");
}

function startNewGame(message = "Game started.") {
  stopGameClock();
  state.foundKeys.clear();
  state.status = GAME_STATUS.running;
  state.selectedElementNumber = null;
  state.elapsedMs = 0;
  state.startedAtMs = Date.now();
  state.timerIntervalId = window.setInterval(updateTimer, 250);

  setGameInteractable(true);
  elements.input.value = "";
  clearSuggestions();
  updateProgress();
  updateTimer();
  setFeedback(message);
  if (isElementsMode()) {
    renderPeriodicBoard();
  }
  elements.input.focus();
}

function endGame(nextStatus) {
  if (state.status !== GAME_STATUS.running) {
    return;
  }

  state.status = nextStatus;
  stopGameClock();
  setGameInteractable(false);
  clearSuggestions();

  const filledRows = countFilledRows();
  const timeText = formatDuration(state.elapsedMs);

  if (nextStatus === GAME_STATUS.won) {
    setFeedback(`All ${totalRows} filled in ${timeText}. Complete!`);
    return;
  }

  revealRemainingAnswers();
  setFeedback(`You resigned at ${timeText} with ${filledRows}/${totalRows} rows filled.`);
}

function revealRemainingAnswers() {
  if (isElementsMode()) {
    rowsWithKeys.forEach((row) => {
      if (state.foundKeys.has(row.key)) {
        return;
      }
      const cell = rowElementsByNumber.get(row.number);
      if (cell) {
        cell.classList.add("is-revealed");
      }
    });
    return;
  }

  rowsWithKeys.forEach((row) => {
    if (state.foundKeys.has(row.key)) {
      return;
    }

    const rowElement = rowElementsByNumber.get(row.number);
    if (!rowElement) {
      return;
    }

    rowElement.classList.add("is-revealed");
    const nameCell = rowElement.querySelector(".row-name");
    if (nameCell) {
      nameCell.textContent = row.name;
    }
  });
}

function updateProgress() {
  const filledRows = countFilledRows();
  elements.progress.textContent = `${filledRows} / ${totalRows} filled`;
}

function updateTimer() {
  if (state.status === GAME_STATUS.running) {
    state.elapsedMs = Date.now() - state.startedAtMs;
  }
  elements.timer.textContent = formatDuration(state.elapsedMs);
}

function stopGameClock() {
  if (state.timerIntervalId !== null) {
    clearInterval(state.timerIntervalId);
    state.timerIntervalId = null;
  }
  if (state.status === GAME_STATUS.running) {
    state.elapsedMs = Date.now() - state.startedAtMs;
  }
  elements.timer.textContent = formatDuration(state.elapsedMs);
}

function isGameRunning() {
  return state.status === GAME_STATUS.running;
}

function setGameInteractable(enabled) {
  elements.input.disabled = !enabled;
  elements.submit.disabled = !enabled;
  elements.resign.disabled = !enabled;
}

function countFilledRows() {
  let count = 0;
  rowsWithKeys.forEach((row) => {
    if (state.foundKeys.has(row.key)) {
      count += 1;
    }
  });
  return count;
}

function setFeedback(message) {
  elements.feedback.textContent = message;
}

async function shareResult() {
  updateTimer();
  const shareText = buildShareText();

  if (navigator.share) {
    try {
      await navigator.share({ text: shareText });
      setFeedback("Result shared.");
      return;
    } catch (error) {
      if (error && error.name === "AbortError") {
        return;
      }
    }
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(shareText);
      setFeedback("Result copied to clipboard.");
      return;
    } catch (error) {
      // Fallback below.
    }
  }

  setFeedback(shareText);
}

function buildShareText() {
  const filledRows = countFilledRows();
  const timeText = formatDuration(state.elapsedMs);
  let statusLabel = "in progress";

  if (state.status === GAME_STATUS.won) {
    statusLabel = "completed";
  } else if (state.status === GAME_STATUS.resigned) {
    statusLabel = "resigned";
  }

  return `${getActiveGameConfig().shareLabel}: ${filledRows}/${totalRows} in ${timeText} (${statusLabel}).`;
}

function formatDuration(durationMs) {
  const totalSeconds = Math.max(0, Math.floor(durationMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const hours = Math.floor(minutes / 60);
  const shortMinutes = minutes % 60;

  if (hours > 0) {
    return `${pad2(hours)}:${pad2(shortMinutes)}:${pad2(seconds)}`;
  }

  return `${pad2(minutes)}:${pad2(seconds)}`;
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

function buildPeople(rows) {
  const byKey = new Map();

  rows.forEach((row) => {
    if (!byKey.has(row.key)) {
      byKey.set(row.key, {
        key: row.key,
        name: row.name,
        rows: [],
        aliases: new Set()
      });
    }

    const person = byKey.get(row.key);
    person.rows.push(row.number);

    addAlias(person.aliases, row.name);
    addAlias(person.aliases, row.name.split(" ").at(-1));

    (row.aliases || []).forEach((alias) => addAlias(person.aliases, alias));
  });

  return byKey;
}

function buildAliasIndex(peopleByKey) {
  const index = new Map();

  for (const person of peopleByKey.values()) {
    for (const alias of person.aliases) {
      if (!index.has(alias)) {
        index.set(alias, new Set());
      }
      index.get(alias).add(person.key);
    }
  }

  return index;
}

function addAlias(set, alias) {
  const normalized = normalizeName(alias || "");
  if (normalized.length < 2) {
    return;
  }
  set.add(normalized);
}

function fuzzyThreshold(length) {
  if (length <= 4) {
    return 1;
  }
  if (length <= 8) {
    return 2;
  }
  return 3;
}

function compareScores(a, b) {
  if (a.startsWith !== b.startsWith) {
    return a.startsWith ? -1 : 1;
  }
  if (a.distance !== b.distance) {
    return a.distance - b.distance;
  }
  return a.normalized - b.normalized;
}

function normalizeName(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractLastToken(value) {
  const tokens = value.split(" ");
  return tokens.at(-1) || "";
}

function shouldOfferAutocomplete(lastNameQuery) {
  if (lastNameQuery.length >= MIN_AUTOCOMPLETE_LASTNAME_LENGTH) {
    return true;
  }

  return hasExactShortLastNameMatch(lastNameQuery);
}

function hasExactShortLastNameMatch(lastNameQuery) {
  if (lastNameQuery.length < 4) {
    return false;
  }

  for (const person of people.values()) {
    if (state.foundKeys.has(person.key)) {
      continue;
    }

    for (const alias of person.aliases) {
      if (extractLastToken(alias) === lastNameQuery) {
        return true;
      }
    }
  }

  return false;
}

function autocompleteDistanceLimit(length) {
  if (length <= 6) {
    return 1;
  }
  if (length <= 10) {
    return 2;
  }
  return 3;
}

function manhattanDistance(a, b) {
  const maxLength = Math.max(a.length, b.length);
  let distance = 0;
  for (let index = 0; index < maxLength; index += 1) {
    if ((a[index] || "") !== (b[index] || "")) {
      distance += 1;
    }
  }
  return distance;
}

function levenshtein(a, b) {
  if (a === b) {
    return 0;
  }
  if (a.length === 0) {
    return b.length;
  }
  if (b.length === 0) {
    return a.length;
  }

  const previous = new Array(b.length + 1);
  const current = new Array(b.length + 1);

  for (let j = 0; j <= b.length; j += 1) {
    previous[j] = j;
  }

  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] + cost
      );
    }
    for (let j = 0; j <= b.length; j += 1) {
      previous[j] = current[j];
    }
  }

  return previous[b.length];
}

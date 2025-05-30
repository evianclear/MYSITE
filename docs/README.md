- git add . - добавляет изменения в файлах
- git status - дает понимание какие файлы были изменены, добавленгы или удалены. Но не сделан комит.
- git commit -m "описание изменений" - фиксирует изменения в репозитории. Сохраняет их в историю.
- git log - выводит всю истоию коммитов. Кто, что, когда изменил.
- git show - дает информацию о конкретном коммите. Дата, автор, что изменилось.
- git diff - разница между текущими изменениями и последним коммитом. Показывает, что именно изменилось в файлах.
- git restore - отменяет все изменения в файлах, возвращает к состоянию последнего коммита. 
- git rm - удаляет файлы из Git, а так же из рабочей папки в случае необходимости.
- git reset - отменяет все коммиты (не запушенные) и возвращает проект к более раннему этапу.
- git branch - показывает список веток.
1. git branch "имя ветки" - создаем новую ветку.
2. git branch - d "имя ветки" - удаляем ветку с названием 
- git pull - переносит актуальные изменения с гита на наш репозиторий. Желательно находится на главной ветке в момент выполения.
- git push - отправляет изменения в удаленный репозиторий. работает только после коммита.
- git help -a - показывает все доступные команды Git.
- git clone url - скопировать/склонировать удаленный репозиторий


### ТЕМА №1: Понятие репозитория, структура проекта.
    Репозиторий - это хранилище кода, включающее:
1) все файлы и папки проекта 
2) история изменений (коммиты) 
3) информация о ветках и настройках 

### Виды репозиториев:
1) локальный - хранится на компьютере разработчика (papka.git)
2) удаленный (remote) - размещен на сервере (либо github либо gitlab)

### Структура проекта
project/            # Корневая папка проекта
|
|-- .git/           # Скрытая папка с данными Git (история, настройки)
|
|-- src/            # Исходный код (например, main.py, index.js)
|-- docs/           # Документация (README.md, API - описание)
|-- tests/          # Тесты (unit - тесты, интегранионные тесты)
|-- config/         # Файлы конфигурации (настройка сервера, БД)
|-- assets/         # Ресурсы (изображения, шрифты)
|
|-- .gitignore      # Файл, указывающий, какие файлы Git должен игнорировать 

### Основные элементы:

    - .git/ - служебная папка Git (нельзя удалять)
    - README.md - описание проекта (обычно в корне)
    - gitignore - список файлов, которые Git не отслеживает

### Жизненный цикл файлов в Git
Файлы в Git проходят несколько стадий:
1) Неотслеживаемое (Untracked) - Git о них не знает
2) Измененные (Modified) - файлы, котоорые уже в репозитории , но были изменены
3) Индексированные (Staged) - файлы, подготовленные к коммиту (git add).
4) Зафиксированные (Committed) - изменения сохранены в репозитории (git commit)

### Важные правила
Коммиты должны быть атомарными - каждое изменение логически завершенное.
- gitignore обязателен - чтобы не засорять репозиторий ненужными файлами.
- README.md - лицо проекта - должен содержать описание, установку и использование. 

1. Поиск - управления учетными данными windows
2. учетные данные windows 
3. удаление github.com данных (только гитхаб)


### Виды, цели и уровни интеграции программных модулей. 
Понятие интеграции программных модулей – это процесс объединения отдельных компонентов ПО  в единую систему, которое обеспечивает их совместное функционирование
### Цель интеграции: 
1) обеспечение взаимодействия модулей
2) повышение надежности и производительности системы
3) упрощение разработки и сопровождения ПО
4) минимизация дублирования функционала
### Виды интеграций программных модулей:
1.	По способу взаимодействия:
1) горизонтальная интеграция – это объединение модулей одного уровня(например, взаимодействие между сервисами в микросервисной архитектуре)
2) вертикальная интеграция – это объединение модулей разных уровней(например, клиентсервирное взаимодействие)
        2. по степени связности:
1) слабая связанность – модули взаимодействуют через стандартный интерфейс(API и сообщения), что упрощает замену компонентов(пример: rest full api и микросервис)
2) сильная связанность – модули тесно зависят друг от друга, изменение одного модуля требует модификации других(пример: монолитная архитектура)
3. по времени  выполнения:
1) статическая интеграция – компоненты связываются на этапе компеляции
2) динамическая интеграция – это когда компоненты связываются во время выполнения(например плагины, которые загружаются  в run time)
4. по уровню автоматизации:
1) ручная интеграция – разработчик сам настраивает взаимодействие модулей между собой
2) автоматизированная интеграция – используется CI CD и система сборки
### Уровни интеграций:
1.	Уровень данных- на уровне данных интеграция осуществляется через общие базы данных, файлы или очереди сообщений(примеры: sql базы данных входит my sql и Postgre sql, блокеры сообщений – в них входит Rabbit MQ)
2.	API – это сервисный уровень модули взаимодействуют через API (rest graphQL), примеры такого уровня – это веб сервисы FLASK и микросервисная архитектура
3.	Уровень пользовательского интерфейса (UI) – интеграция происходит через единый интерфейс (веб, мобильные приложения). Примеры : SPA и PVA.
DESKTOP приложения  -можно реализовать через QT
4.	Уровень бизнес логики – интеграция на уровне бизнес правил и процессов ( примеры ERP системы и workflow движки) 
Инструментальные средства интеграции 
1)	 Средства сборки и управления зависимостями 
- Maven, Gradle (Java).
- npm, yarn (JavaScript).
-pip (Python).
2) CI/CD – инструменты 
- Jenkins, GitLab CI, GitHub Actions – автоматизация сборки и тестирование.
- Docker, Kubernetes – контейнеризация и орхестриция 
3) Middleware и брокеры сообщений 
- RabbitMQ, Apache Kafka – асинхронная интеграция.
- Redis – кеширование и Pub/Sub.
4) API-шлюзы и сервисные сетки 
-Kong, Apigee – управление API.
- Istio, Linkerd – сервис-меш для микросервисов.   

Автоматизация бизнес процессов – это использование различных технологий для выполнения повторяющихся задач, подразумевает минимизацию ручного труда и повышения эффективности работы организации. Цели автоматизации:
1)	Ускорение выполнения операций
2)	Снижение ошибок из-за человеческого фактора
3)	Оптимизация затрат 
4)	Повышение управляемости и прозрачности процессов 
5)	Масштабируемость бизнеса 
### Виды бизнес процессов 
1.	Линейные процессы (простые) – подразумевает последовательные задачи без ветвлений 
2.	Не линейные процессы (сложные) – они включают в себя:  условия, циклы и параллельные потоки. 
### Виды бизнес  процессов по функциональным областям:
1.	Управление документо-оборотом. 
2.	Финансы и бугалтерия – автоматизация отчетов 
3.	Логистика и склад – учет товаров, доставки и тд
4.	HR процесс – рекрутинг (набор персонала), онбординг (погружение в задачи, рассказывают как работают и тп.).
5.	Тех-поддержка – чат бота для улучшения поддержки того или иного функционала 
  
### Уровни автоматизации бизнес-процессов 
1)	Базовый уровень – решает всякого рода рутинные задачи
- оптимизация простых задач, рассылка email и sms, генерация отчётов, обработка данных
       2) Средний уровень (Workflow автоматизация) – применяются BRM системы (это настройка маршрутов согласования различных требований, для интеграции CRM – 1C
       3) высокий уровень автоматизации бизнес процессов – применяется RPA (роботизированная автоматизация процессов) предназначены для имитации действий пользователей.
4) искусственный интеллект – используется для анализа данных в чат ботах и в прогнозировании. 
4. Инструментальные средства для автоматизации
4.1 Low-code/ No-code платформы
- Microsoft Power Automate – интеграция сервисов без программирования.
- Zapier – связь между веб-приложениями(Google Docs  - Slack).
- Notion + Automate.io  - управление проектами.
4.2 BPM-системы
- Camunda – open-source-решение для моделирования процессов.
-Bizagi – визуальный дизайнер workflow
- Appian, Pega – корпоративные платформы
4.3 RPA-инструменты
-UiPath – разработка программных роботов
- utomation Anywhere – облачнаня автоматизация
4.4 Интеграционные платформы
-Apache Kafka – потоковая обработка данных
- MuleSoft – API-интеграция
5. Этапы внедрения автоматизаций:
1) анализ процесса – это выявление узких мест
2) выбор инструментов – он зависит от бюджета и поставленных задач
3) прототепирование – это тест на правильно выстроенные процессы
4) внедрение и обучение – это адаптация сотрудников к новым процессам, анвординг
5) мониторинг и оп

### Конфиг Prettier
Форматировать документ: Shift + ALT + f
{
# Максимальное количество символов на 1 строке
    "printwidth": 80; 

# Использовать символы табулияции для отступов
    "useTabs": true,

# Ширина отступа при табуляции (количество пробелов)
    "tabswidth": 2,

# Использовать точки с запятой в конце выражений JavaScript
    "semi": true,

# Использовать одинарные кавычки или двойные 
    "singleQuote": true/false,

# Правила подстановки завершающей запятой 
    1. none - не добавлять финальную запятую
    2. es5 - добавить запятую там, где это допустимо
    3. all - везде где синтаксис позволяет
    "trailingComa": "es5", 

# Оставляь ли пустое пространство внутри квадратных или круглых скобках
    "bracketSpacing": true/false,

# Включать ли аргументы функции в круглые скобки 
    1. always - это всегда
    2. avoid - избегать круглых скобок при одном аргументе
    "arrowParens": "always",
}

# выбор источников и приемников данных, сопоставление объектов данных
источник данных - это объект  или система откуда поступают данные для обработки
приенмник  данных - это объект или система, куда передаются обработанные данные
примеры источников:
1. база данных, Sql или noSql
2. файлы
3. API
4. потоки данных
примеры приемников данных:
1. запись результатов
2. отчеты и визуализации
3. внешние системы
4. облачные хранилища
# критерии выбора источников и приемников, при выборе учитывают:
1. формат данных бывает: (структурированный, полуструктурированный)
2. объем данных, большие данные требуют распределенных систем
3. частота обновления(real time либо пакетная обработка)
4. надежность и доступность
5. безопасность, безопасность можно обеспечить с помощью шифрования
6. стоимость(это лицензии и облачные тарифы)
# сопоставлене объектов данных 
это процесс преобразования данных между источником и приемником
этапы сопоставленния:
1. анализ структуры данных
2. преобразование типов
3. маппинг полей - это сопоставление названий столбцов
4. обработка отсутствующих данных, при отсутствии данных поля заполняются либо дефолтными значениями, либо явно указанными
5. валидация - это проверка на корректность 

инструменты для маппинга:
проблемы и решения:
1. если схемы не совпадают - прблему решают использование унифицированных форматов
2. если данные теряются- на помощь приходит логирование и мониторинг
3. для производительности оптимизируются запросы, индексы и реализуется кэширование

# транспортные протоколы, стандарты формирования сообщений
транспортные протоколы определяют правила передачи данных

основные транспортные протоколы:
1. http/https 
http - это хайпер текст, трансфер, протокол. это протокол для передачи данных в веб среде(незащищенный)
https - это защищенная версия
методы: get, post, put ,delete и др
использование : REST, API, веб приложения
2. webSocket
- двусторонний протокол для обмена сообщениями в реальном времени
- преимущества: низкие задержки, постоянное соединение.
- использование: чаты, онлайн игры,биржевые котировки
3. TCP/IP  И  UDP
 - TCP (Transmisson Control Protocol) - быстрая передача без гарантии доставки
 Испоьзуется VoIP, стриминге, DNS
 4. MQTT(Message Queuing Telemetry Transport)
 - легковесный протокол для IoI и устройств с ограниченными ресурсами
 - работает по модели издатель-подписчик(Pub/Sub)
 5. AMQP
 - протокол для асинхронного обмена сообщениями между системами.
 - поддержка очередей(RabbitMQ, ApacheKafka)
 6.GRPC
 - высокопроизводительный rpc-протокол на основе HTTP/2
 - использует бинарный формат
 ### Стандаты формирования сообщений 
 форматы сообщений определяют структуру данных для обмена между системами
 # текстовые форматы:
 
 1) json (JavaScript ) - данный формат легковесный и легко читаемый, стркуктура ключ - значение (("name": "John", "age": 30)). Испольуется в rets API. 

 2) xml - это структурированный формат с поддержкой схем xsd.
 <user>
    <name> John</name>
    <age> 30</age>
    </user>

3) yuml - это упрощенный синтаксис, удобен для конфигураций, используется в докере и в кибернетис
user:
    name:John
    age: 30

4) выбор протокола и формата для веб API, как правило используется https + json, для стриминга, чатов, социальных сетей веб сокет + месседж пак
5) 
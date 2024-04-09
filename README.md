# M-FE-150124

Репозитарий содержит материалы для занятий по курсу Frontend PRO, занятия practice (практические занятия после основных занятий).
## Структура репозитария
Репозитарий содержит "под-папки", каждая из которых посвящена отдельному занятию
## Пояснения по содержимому
Каждая "под-папка" содержит материалы по одному занятию. Обычно там будут файлы HTML, CSS, JS. Обязательно, в папке будет присутствовать файл README, в котором будет описана структура занятия, цели и список задач, которые предполагается рассмотреть. Также, файл README будет содержать полезные ссылки по материалам занятия - рекомендуется их не игнорировать)

### Краткий справочник команд по гиту, нужный нам на первом этапе
`git clone АДРЕС_РЕПОЗИТАРИЯ` - клонирование удаленного репозитария. АДРЕС_РЕПОЗИТАРИЯ берем на удаленном репозитарии (на гитхабе, например). Эта команда:
 - создает локальный репозитарий
 - копирует в него все, что на данный момент есть на удаленном репозитарии
 - создает связь с удаленным репозитарием

`git status` - посмотреть статус файлов в своем локальном репозитарии.
 - modified - файл изменен (в VS Code помечается желтым)
 - deleted - удален
 - untracked - это новый файл (VS Code помечается зеленым)

`git checkout ИМЯ_ВЕТКИ` - переход в ветку

`git checkout -b ИМЯ_НОВОЙ_ВЕТКИ` - создать новую ветку, и перейти в нее

`git add СПИСОК_ФАЙЛОВ` - пометить файл(ы) для коммита. То есть сказать гиту, что именно эти файлы мы хотим добавить в ближайший коммит.

`git add .` - пометить ВСЕ измененные файлы для коммита.

`git commit -m 'КОММЕНТАРИЙ'` - сделать коммит в своем локальном репозитарии

`git pull` - "стянуть" себе в локальный репозитарий изменения с удаленного репозитария.

`git push` - залить изменения из своего локального репозитария в удаленный репозитарий.

`git stash` - взять все измененные файлы,  и сложить их в "временное хранилище".

`git stash pop` - взять все файлы из "временного хранилища", и применить к ТЕКУЩЕЙ ветке.

`git branch -v` - посмотреть список веток в своем локальном репозитарии.

### Инструкция по работе с git на занятии
1. Открыть папку, в которую клонирован наш репозитарий.
2. Запустить в этой папке Git Bash
3. Перейти в ветку `main` - это моя (главная) ветка, в которую я заливаю изменения. Если Вы уже в ней - ничего делать не надо. Если нет - выполняем команду `git checkout main`. Если пишет ошибки `error: Your local changes to the following files would be overwritten by checkout` - это значит, что в текущей ветке есть изменения, которые нужно закоммитить/отменить. Чтобы закоммитить:
  - `git add .` - добавляем все файлы для коммита
  - `git commit -m 'КОММЕНТАРИЙ'` - собственно коммит

Если же хотите удалить изменения - `git restore .`
4. Выполнить команду `git pull` - стянуть себе мои изменения.
5. Создать новую (свою) ветку для текущего занятия: `git checkout -b practice_05`. Эта команда создаст ветку, и перейдет в нее.
6. Работаем по занятию - пишем код.
7. В конце занятия, сохраняем изменения:
  - `git add .` - добавляем все файлы для коммита
  - `git commit -m 'КОММЕНТАРИЙ'` - собственно коммит

Таким образом, у вас на каждое занятие есть своя ветка, и в ней хранятся ваши пометки по занятию.
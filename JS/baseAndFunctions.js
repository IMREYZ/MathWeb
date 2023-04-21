// Объекты - задачи1
const allProblems = 

[   
    {problem: '1.1', answer: 106, procent: 20, type: 'Равнобедненный треугольник'},
    {problem: '1.2', answer: 0.9, procent: 35, type: 'Прямоугольный треугольник'},
    {problem: '1.3', answer: 0.4, procent: 30, type: 'Прямоугольный треугольник'},
    {problem: '1.4', answer: 16.4, procent: 70, type: 'Прямоугольный треугольник'},
    {problem: '1.5', answer: 86, procent: 40, type: 'Прямоугольный треугольник'},
    {problem: '1.6', answer: 1, procent: 60, type: 'Прямоугольный треугольник'},
    {problem: '1.7', answer: 26, procent: 35, type: 'Прямоугольный треугольник'},
    {problem: '1.8', answer: 66, procent: 45, type: 'Треугольник'},
    {problem: '1.9', answer: 19, procent: 65, type: 'Прямоугольный треугольник'},
    {problem: '1.10', answer: 16, procent: 60, type: 'Прямоугольный треугольник'},
    {problem: '1.11', answer: 5.5, procent: 30, type: 'Трапеция'},
    {problem: '1.12', answer: 116, procent: 35, type: 'Параллелограмм'},
    {problem: '1.13', answer: 6, procent: 25, type: 'Параллелограмм'},
    {problem: '1.14', answer: 15, procent: 80, type: 'Параллелограмм'},
    {problem: '1.15', answer: 68, procent: 35, type: 'Ромб'},
    {problem: '1.16', answer: 16, procent: 30, type: 'Ромб'},
    {problem: '1.17', answer: 21, procent: 15, type: 'Окружность'},
    {problem: '1.18', answer: 198, procent: 20, type: 'Окружность'},
    {problem: '1.19', answer: 10.5, procent: 60, type: 'Окружность'},
    {problem: '1.20', answer: 47, procent: 40, type: 'Равнобедненный треугольник'},
    {problem: '1.21', answer: 124, procent: 60, type: 'Треугольник'},
    {problem: '1.22', answer: 30.25, procent: 70, type: 'Равнобедненный треугольник'},
    {problem: '1.23', answer: 20, procent: 35, type: 'Треугольник'},
    {problem: '1.24', answer: 3.5, procent: 70, type: 'Окружность'},
    {problem: '1.25', answer: 96, procent: 30, type: 'Треугольник'},
    {problem: '1.26', answer: 119, procent: 65, type: 'Треугольник'},
    {problem: '1.27', answer: 0.5, procent: 30, type: 'Равнобедненный треугольник'},
    {problem: '1.28', answer: 0.4, procent: 35, type: 'Равнобедненный треугольник'},
    {problem: '1.29', answer: 0.7, procent: 30, type: 'Равнобедненный треугольник'},
    {problem: '1.30', answer: 0.4, procent: 35, type: 'Равнобедненный треугольник'},
    {problem: '1.31', answer: 132, procent: 30, type: 'Окружность'},
    {problem: '1.32', answer: 2, procent: 80, type: 'Равнобедненный треугольник'},
    {problem: '1.33', answer: 6, procent: 40, type: 'Треугольник'},
    {problem: '1.34', answer: 20, procent: 70, type: 'Равнобедненный треугольник'},
    {problem: '1.35', answer: 90, procent: 50, type: 'Равносторонний треугольник'},
    {problem: '1.36', answer: 20, procent: 40, type: 'Прямоугольный треугольник'},
    {problem: '1.37', answer: 0.6, procent: 25, type: 'Прямоугольный треугольник'},
    {problem: '1.38', answer: 9, procent: 65, type: 'Прямоугольный треугольник'},
    {problem: '1.39', answer: 55 , procent: 40, type: 'Прямоугольный треугольник'},
    {problem: '1.40', answer: 21, procent: 55, type: 'Прямоугольный треугольник'},
    {problem: '1.41', answer: 31, procent: 60, type: 'Прямоугольный треугольник'},
    {problem: '1.42', answer: 78, procent: 55, type: 'Прямоугольный треугольник'},
    {problem: '1.43', answer: 2, procent: 45, type: 'Трапеция'},
    {problem: '1.44', answer: 70, procent: 60, type: 'Параллелограмм'},
    {problem: '1.45', answer: 1.5, procent: 30, type: 'Параллелограмм'},
    {problem: '1.46', answer: 99, procent: 75, type: 'Параллелограмм'},
    {problem: '1.47', answer: 72, procent: 45, type: 'Ромб'},
    {problem: '1.48', answer: 51, procent: 45, type: 'Ромб'},
    {problem: '1.49', answer: 5, procent: 20, type: 'Окружность'},
    {problem: '1.50', answer: 78, procent: 30, type: 'Окружность'},
    {problem: '1.51', answer: 18.5, procent: 60, type: 'Окружность'},
    {problem: '1.52', answer: 4.5, procent: 45, type: 'Окружность'},
    {problem: '1.53', answer: 122, procent: 30, type: 'Окружность'},
    {problem: '1.54', answer: 103, procent: 40, type: 'Окружность'},
    {problem: '1.55', answer: 36, procent: 40, type: 'Окружность'},
    {problem: '1.56', answer: 56, procent: 35, type: 'Окружность'},
    {problem: '1.57', answer: 46, procent: 55, type: 'Окружность'},
    {problem: '1.58', answer: 122, procent: 60, type: 'Окружность'},
    {problem: '1.59', answer: 118, procent: 45, type: 'Окружность'},
    {problem: '1.60', answer: 63, procent: 55, type: 'Окружность'},
    {problem: '1.61', answer: 35, procent: 40, type: 'Окружность'},
    {problem: '1.62', answer: 91, procent: 40, type: 'Окружность'},
    {problem: '1.63', answer: 98, procent: 45, type: 'Окружность'},
    {problem: '1.64', answer: 33, procent: 40, type: 'Окружность'},
    {problem: '1.65', answer: 40, procent: 80, type: 'Окружность'},
    {problem: '1.66', answer: 39, procent: 25, type: 'Равнобедненный треугольник'},
    {problem: '1.67', answer: 54, procent: 40, type: 'Треугольник'},
    {problem: '1.68', answer: 84, procent: 35, type: 'Равнобедненный треугольник'},
    {problem: '1.69', answer: 102, procent: 70, type: 'Треугольник'},
    {problem: '1.70', answer: 2.25, procent: 75, type: 'Равнобедненный треугольник'},
    {problem: '1.71', answer: 12.5, procent: 40, type: 'Треугольник'},
    {problem: '1.72', answer: 16, procent: 50, type: 'Треугольник'},
    {problem: '1.73', answer: 1, procent: 25, type: 'Треугольник'},
    {problem: '1.74', answer: 123, procent: 75, type: 'Треугольник'},
    {problem: '1.75', answer: 0.8, procent: 25, type: 'Равнобедненный треугольник'},
    {problem: '1.76', answer: 0.3, procent: 60, type: 'Равнобедненный треугольник'},
    {problem: '1.77', answer: 21, procent: 90, type: 'Равнобедненный треугольник'},
    {problem: '1.78', answer: 0.45, procent: 25, type: 'Равнобедненный треугольник'},
    {problem: '1.79', answer: 12, procent: 75, type: 'Равнобедненный треугольник'},
    {problem: '1.80', answer: 54, procent: 50, type: 'Равносторонний треугольник'},
    {problem: '1.81', answer: 20, procent: 40, type: 'Прямоугольный треугольник'},
    {problem: '1.82', answer: 102, procent: 30, type: 'Окружность'},
    {problem: '1.83', answer: 70, procent: 70, type: 'Окружность'},
    {problem: '1.84', answer: 32, procent: 30, type: 'Окружность'},
    {problem: '1.85', answer: 68, procent: 35, type: 'Окружность'},
    {problem: '1.86', answer: 75, procent: 30, type: 'Окружность'},



    {problem: '2.1', answer: 15, procent: 25, type: 'Многогранник'},
    {problem: '2.2', answer: 12, procent: 30, type: 'Многогранник'},
    {problem: '2.3', answer: 112, procent: 70, type: 'Многогранник'},
    {problem: '2.4', answer: 8, procent: 50, type: 'Куб'},
    {problem: '2.5', answer: 12, procent: 40, type: 'Куб'},
    {problem: '2.6', answer: 90, procent: 60, type: 'Куб'},
    {problem: '2.7', answer: 45, procent: 60, type: 'Куб'},
    {problem: '2.8', answer: 60, procent: 60, type: 'Куб'},
    {problem: '2.9', answer: 90, procent: 60, type: 'Куб'},
    {problem: '2.10', answer: 18, procent: 45, type: 'Параллелепипед'},
    {problem: '2.11', answer: 0.8, procent: 65, type: 'Параллелепипед'},
    {problem: '2.12', answer: 35, procent: 40, type: 'Параллелепипед'},
    {problem: '2.13', answer: 357, procent: 80, type: 'Параллелепипед'},
    {problem: '2.14', answer: 30, procent: 40, type: 'Параллелепипед'},
    {problem: '2.15', answer: 42, procent: 45, type: 'Призма'},
    {problem: '2.16', answer: 4, procent: 50, type: 'Призма'},
    {problem: '2.17', answer: 60, procent: 100, type: 'Призма'},
    {problem: '2.18', answer: 45, procent: 60, type: 'Призма'},
    {problem: '2.19', answer: 60, procent: 55, type: 'Призма'},
    {problem: '2.20', answer: 12, procent: 55, type: 'Призма'},
    {problem: '2.21', answer: 74, procent: 35, type: 'Призма'},
    {problem: '2.22', answer: 37.5, procent: 35, type: 'Призма'},
    {problem: '2.23', answer: 60, procent: 70, type: 'Призма'},
    {problem: '2.24', answer: 12, procent: 65, type: 'Призма'},
    {problem: '2.25', answer: 66, procent: 65, type: 'Призма'},
    {problem: '2.26', answer: 5, procent: 70, type: 'Призма'},
    {problem: '2.27', answer: 184, procent: 50, type: 'Призма'},
    {problem: '2.28', answer: 2, procent: 35, type: 'Цилиндр'},
    {problem: '2.29', answer: 4.5, procent: 60, type: 'Комбинации тел'},
    {problem: '2.30', answer: 9, procent: 60, type: 'Комбинации тел'},
    {problem: '2.31', answer: 12, procent: 75, type: 'Цилиндр'},
    {problem: '2.32', answer: 50, procent: 75, type: 'Цилиндр'},
    {problem: '2.33', answer: 100, procent: 40, type: 'Цилиндр'},
    {problem: '2.34', answer: 2275, procent: 50, type: 'Цилиндр'},
    {problem: '2.35', answer: 15, procent: 30, type: 'Конус'},
    {problem: '2.36', answer: 60, procent: 65, type: 'Конус'},
    {problem: '2.37', answer: 1680, procent: 65, type: 'Конус'},
    {problem: '2.38', answer: 3, procent: 30, type: 'Конус'},
    {problem: '2.39', answer: 64, procent: 45, type: 'Конус'},
    {problem: '2.40', answer: 3, procent: 40, type: 'Конус'},
    {problem: '2.41', answer: 3, procent: 90, type: 'Конус'},
    {problem: '2.42', answer: 20.8, procent: 100, type: 'Конус'},
    {problem: '2.43', answer: 12.6, procent: 95, type: 'Конус'},
    {problem: '2.44', answer: 175, procent: 90, type: 'Конус'},
    {problem: '2.45', answer: 342, procent: 95, type: 'Конус'},
    {problem: '2.46', answer: 72, procent: 50, type: 'Параллелепипед'},
    {problem: '2.47', answer: 12, procent: 45, type: 'Призма'},
    {problem: '2.48', answer: 12, procent: 35, type: 'Призма'},
    {problem: '2.49', answer: 20, procent: 40, type: 'Параллелепипед'},
    {problem: '2.50', answer: 29, procent: 55, type: 'Пирамида'},
    {problem: '2.51', answer: 24, procent: 30, type: 'Пирамида'},
    {problem: '2.52', answer: 9800, procent: 80, type: 'Пирамида'},
    {problem: '2.53', answer: 2.5, procent: 55, type: 'Пирамида'},
    {problem: '2.54', answer: 3.5, procent: 95, type: 'Пирамида'},
    {problem: '2.55', answer: 16, procent: 70, type: 'Пирамида'},
    {problem: '2.56', answer: 1, procent: 30, type: 'Пирамида'},
    {problem: '2.57', answer: 19.5, procent: 55, type: 'Пирамида'},
    {problem: '2.58', answer: 14, procent: 60, type: 'Призма'},
    {problem: '2.59', answer: 32, procent: 80, type: 'Призма'},
    {problem: '2.60', answer: 42, procent: 45, type: 'Призма'},
    {problem: '2.61', answer: 12, procent: 50, type: 'Призма'},
    {problem: '2.62', answer: 8, procent: 40, type: 'Призма'},
    {problem: '2.63', answer: 10, procent: 50, type: 'Призма'},
    {problem: '2.64', answer: 6, procent: 95, type: 'Пирамида'},
    {problem: '2.65', answer: 3, procent: 45, type: 'Шар'},
    {problem: '2.66', answer: 4, procent: 35, type: 'Комбинации тел'},
    {problem: '2.67', answer: 2197, procent: 50, type: 'Комбинации тел'},
    {problem: '2.68', answer: 64, procent: 40, type: 'Комбинации тел'},
    {problem: '2.69', answer: 15, procent: 55, type:'Комбинации тел'},
    {problem: '2.70', answer: 64, procent: 35, type: 'Комбинации тел'},
    {problem: '2.71', answer: 210, procent: 75, type: 'Комбинации тел'},
    {problem: '2.72', answer: 32768, procent: 65, type: 'Комбинации тел'},
    {problem: '2.73', answer: 75, procent: 40, type: 'Комбинации тел'},
    {problem: '2.74', answer: 72, procent: 50, type: 'Комбинации тел'},
    {problem: '2.75', answer: 20, procent: 65, type: 'Комбинации тел'},
    {problem: '2.76', answer: 50, procent: 60, type: 'Комбинации тел'},
    {problem: '2.77', answer: 188, procent: 35, type: 'Комбинации тел'},
    {problem: '2.78', answer: 171, procent: 25, type: 'Комбинации тел'},
    {problem: '2.79', answer: 5, procent: 60, type: 'Комбинации тел'},
    {problem: '2.80', answer: 1, procent: 45, type: 'Комбинации тел'},
    {problem: '2.81', answer: 32, procent: 45, type: 'Комбинации тел'},
    {problem: '2.82', answer: 90.5, procent: 80, type: 'Комбинации тел'},
    {problem: '2.83', answer: 24, procent: 25, type: 'Многогранник'},
    {problem: '2.84', answer: 3, procent: 30, type: 'Многогранник'},
    {problem: '2.85', answer: 80, procent: 70, type: 'Многогранник'},
    {problem: '2.86', answer: 1, procent: 50, type: 'Куб'},
    {problem: '2.87', answer: 2.5, procent: 40, type: 'Куб'},
    {problem: '2.88', answer: 90, procent: 60, type: 'Куб'},
    {problem: '2.89', answer: 45, procent: 60, type: 'Куб'},
    {problem: '2.90', answer: 60, procent: 60, type: 'Куб'},
    {problem: '2.91', answer: 90, procent: 60, type: 'Куб'},
    {problem: '2.92', answer: 18, procent: 45, type: 'Параллелепипед'},
    {problem: '2.93', answer: 0.6, procent: 65, type: 'Параллелепипед'},
    {problem: '2.94', answer: 110, procent: 40, type: 'Параллелепипед'},
    {problem: '2.95', answer: 667, procent: 80, type: 'Параллелепипед'},
    {problem: '2.96', answer: 60, procent: 40, type: 'Параллелепипед'},
    {problem: '2.97', answer: 24, procent: 45, type: 'Призма'},
    {problem: '2.98', answer: 4, procent: 50, type: 'Призма'},
    {problem: '2.99', answer: 60, procent: 100, type: 'Призма'},
    {problem: '2.100', answer: 45, procent: 60, type: 'Призма'},
    {problem: '2.101', answer: 20, procent: 55, type: 'Призма'},
    {problem: '2.102', answer: 13, procent: 55, type: 'Призма'},
    {problem: '2.103', answer: 86, procent: 35, type: 'Призма'},
    {problem: '2.104', answer: 12, procent: 35, type: 'Призма'},
    {problem: '2.105', answer: 60, procent: 70, type: 'Призма'},
    {problem: '2.106', answer: 12, procent: 65, type: 'Призма'},
    {problem: '2.107', answer: 28, procent: 65, type: 'Призма'},
    {problem: '2.108', answer: 5, procent: 70, type: 'Призма'},
    {problem: '2.109', answer: 180, procent: 50, type: 'Призма'},
    {problem: '2.110', answer: 5, procent: 35, type: 'Цилиндр'},
    {problem: '2.111', answer: 1.125, procent: 60, type: 'Комбинации тел'},
    {problem: '2.112', answer: 36, procent: 60, type: 'Комбинации тел'},
    {problem: '2.113', answer: 2, procent: 75, type: 'Цилиндр'},
    {problem: '2.114', answer: 72, procent: 75, type: 'Цилиндр'},
    {problem: '2.115', answer: 3, procent: 40, type: 'Цилиндр'},
    {problem: '2.116', answer: 375, procent: 50, type: 'Цилиндр'},
    {problem: '2.117', answer: 40, procent: 30, type: 'Конус'},
    {problem: '2.118', answer: 6, procent: 65, type: 'Конус'},
    {problem: '2.119', answer: 1680, procent: 65, type: 'Конус'},
    {problem: '2.120', answer: 14, procent: 30, type: 'Конус'},
    {problem: '2.121', answer: 25, procent: 45, type: 'Конус'},
    {problem: '2.122', answer: 1.5, procent: 40, type: 'Конус'},
    {problem: '2.123', answer: 2, procent: 90, type: 'Конус'},
    {problem: '2.124', answer: 13.5, procent: 100, type: 'Конус'},
    {problem: '2.125', answer: 2.4, procent: 95, type: 'Конус'},
    {problem: '2.126', answer: 63, procent: 90, type: 'Конус'},
    {problem: '2.127', answer: 3685, procent: 95, type: 'Конус'},
    {problem: '2.128', answer: 16, procent: 50, type: 'Параллелепипед'},
    {problem: '2.129', answer: 14, procent: 45, type: 'Призма'},
    {problem: '2.130', answer: 24, procent: 35, type: 'Призма'},
    {problem: '2.131', answer: 45, procent: 40, type: 'Параллелепипед'},
    {problem: '2.132', answer: 3, procent: 55, type: 'Пирамида'},
    {problem: '2.133', answer: 24, procent: 30, type: 'Пирамида'},
    {problem: '2.134', answer: 1200, procent: 80, type: 'Пирамида'},
    {problem: '2.135', answer: 6, procent: 55, type: 'Пирамида'},
    {problem: '2.136', answer: 4, procent: 95, type: 'Пирамида'},
    {problem: '2.137', answer: 32, procent: 70, type: 'Пирамида'},
    {problem: '2.138', answer: 9, procent: 30, type: 'Пирамида'},
    {problem: '2.139', answer: 3, procent: 55, type: 'Пирамида'},
    {problem: '2.140', answer: 8, procent: 60, type: 'Призма'},
    {problem: '2.141', answer: 10, procent: 90, type: 'Призма'},
    {problem: '2.142', answer: 10, procent: 45, type: 'Призма'},
    {problem: '2.143', answer: 3, procent: 50, type: 'Призма'},
    {problem: '2.144', answer: 16, procent: 40, type: 'Призма'},
    {problem: '2.145', answer: 6, procent: 50, type: 'Призма'},
    {problem: '2.146', answer: 7.5, procent: 95, type: 'Пирамида'},
    {problem: '2.147', answer: 10, procent: 45, type: 'Шар'},
    {problem: '2.148', answer: 64, procent: 35, type: 'Комбинации тел'},
    {problem: '2.149', answer: 512, procent: 50, type: 'Комбинации тел'},
    {problem: '2.150', answer: 49, procent: 40, type: 'Комбинации тел'},
    {problem: '2.151', answer: 10, procent: 55, type: 'Комбинации тел'},
    {problem: '2.152', answer: 8, procent: 35, type: 'Комбинации тел'},
    {problem: '2.153', answer: 42, procent: 75, type: 'Комбинации тел'},
    {problem: '2.154', answer: 29791, procent: 65, type: 'Комбинации тел'},
    {problem: '2.155', answer: 27, procent: 40, type: 'Комбинации тел'},
    {problem: '2.156', answer: 31.5, procent: 50, type: 'Комбинации тел'},
    {problem: '2.157', answer: 102, procent: 65, type: 'Комбинации тел'},
    {problem: '2.158', answer: 11, procent: 60, type: 'Комбинации тел'},
    {problem: '2.159', answer: 156, procent: 35, type: 'Комбинации тел'},
    {problem: '2.160', answer: 6, procent: 25, type: 'Комбинации тел'},
    {problem: '2.161', answer: 6, procent: 60, type: 'Комбинации тел'},
    {problem: '2.162', answer: 0.25, procent: 45, type: 'Комбинации тел'},
    {problem: '2.163', answer: 4, procent: 45, type: 'Комбинации тел'},
    {problem: '2.164', answer: 125, procent: 80, type: 'Комбинации тел'},



    {problem: '3.1', answer: 0.8, procent: 20, type: 'Классическая вероятность'},
    {problem: '3.2', answer: 0.74, procent: 30, type: 'Классическая вероятность'},
    {problem: '3.3', answer: 0.2, procent: 35, type: 'Классическая вероятность'},
    {problem: '3.4', answer: 0.16, procent: 45, type: 'Классическая вероятность'},
    {problem: '3.5', answer: 0.4, procent: 50, type: 'Классическая вероятность'},
    {problem: '3.6', answer: 0.25, procent: 35, type: 'Классическая вероятность'},
    {problem: '3.7', answer: 0.97, procent: 55, type: 'Классическая вероятность'},
    {problem: '3.8', answer: 0.55, procent: 30, type: 'Классическая вероятность'},
    {problem: '3.9', answer: 0.3, procent: 75, type: 'Классическая вероятность'},
    {problem: '3.10', answer: 0.35, procent: 75, type: 'Классическая вероятность'},
    {problem: '3.11', answer: 0.2, procent: 65, type: 'Классическая вероятность'},
    {problem: '3.12', answer: 0.92, procent: 40, type: 'Классическая вероятность'},
    {problem: '3.13', answer: 0.88, procent: 70, type: 'Округление вероятности'},
    {problem: '3.14', answer: 0.97, procent: 90, type: 'Округление вероятности'},
    {problem: '3.15', answer: 0.6, procent: 25, type: 'Классическая вероятность'},
    {problem: '3.16', answer: 0.75, procent: 40, type: 'Классическая вероятность'},
    {problem: '3.17', answer: 0.05, procent: 40, type: 'Классическая вероятность'},
    {problem: '3.18', answer: 0.08, procent: 95, type: 'Классическая вероятность'},
    {problem: '3.19', answer: 0.5, procent: 65, type: 'Классическая вероятность'},
    {problem: '3.20', answer: 0.4, procent: 20, type: 'Классическая вероятность'},
    {problem: '3.21', answer: 0.65, procent: 30, type: 'Классическая вероятность'},
    {problem: '3.22', answer: 0.25, procent: 35, type: 'Классическая вероятность'},
    {problem: '3.23', answer: 0.4, procent: 45, type: 'Классическая вероятность'},
    {problem: '3.24', answer: 0.25, procent: 50, type: 'Классическая вероятность'},
    {problem: '3.25', answer: 0.25, procent: 35, type: 'Классическая вероятность'},
    {problem: '3.26', answer: 0.996, procent: 55, type: 'Классическая вероятность'},
    {problem: '3.27', answer: 0.46, procent: 30, type: 'Классическая вероятность'},
    {problem: '3.28', answer: 0.4, procent: 75, type: 'Классическая вероятность'},
    {problem: '3.29', answer: 0.2, procent: 75, type: 'Классическая вероятность'},
    {problem: '3.30', answer: 0.25, procent: 65, type: 'Классическая вероятность'},
    {problem: '3.31', answer: 0.86, procent: 40, type: 'Классическая вероятность'},
    {problem: '3.32', answer: 0.89, procent: 70, type: 'Округление вероятности'},
    {problem: '3.33', answer: 0.98, procent: 90, type: 'Округление вероятности'},
    {problem: '3.34', answer: 0.5, procent: 25, type: 'Классическая вероятность'},
    {problem: '3.35', answer: 0.25, procent: 40, type: 'Классическая вероятность'},
    {problem: '3.36', answer: 0.2, procent: 40, type: 'Классическая вероятность'},
    {problem: '3.37', answer: 0.2, procent: 95, type: 'Классическая вероятность'},
    {problem: '3.38', answer: 0.25, procent: 65, type: 'Классическая вероятность'},



    {problem: '4.1', answer: 0.1, procent: 45, type: 'Классическая вероятность'},
    {problem: '4.2', answer: 0.96, procent: 75, type: 'Классическая вероятность'},
    {problem: '4.3', answer: 0.55, procent: 10, type: 'Сложение, умножение вероятностей'},
    {problem: '4.4', answer: 0.16, procent: 30, type: 'Сложение, умножение вероятностей'},
    {problem: '4.5', answer: 0.027, procent: 35, type: 'Сложение, умножение вероятностей'},
    {problem: '4.6', answer: 0.9216, procent: 40, type: 'Сложение, умножение вероятностей'},
    {problem: '4.7', answer: 0.0042, procent: 75, type: 'Сложение, умножение вероятностей'},
    {problem: '4.8', answer: 0.04, procent: 45, type: 'Сложение, умножение вероятностей'},
    {problem: '4.9', answer: 0.0009, procent: 50, type: 'Сложение, умножение вероятностей'},
    {problem: '4.10', answer: 0.9975, procent: 65, type: 'Сложение, умножение вероятностей'},
    {problem: '4.11', answer: 0.488, procent: 55, type: 'Сложение, умножение вероятностей'},
    {problem: '4.12', answer: 0.33, procent: 70, type: 'Сложение, умножение вероятностей'},
    {problem: '4.13', answer: 0.11, procent: 10, type: 'Полная вероятность'},
    {problem: '4.14', answer: 0.78, procent: 80, type: 'Полная вероятность'},
    {problem: '4.15', answer: 0.025, procent: 50, type: 'Сложение, умножение вероятностей'},
    {problem: '4.16', answer: 0.069, procent: 65, type: 'Сложение, умножение вероятностей'},
    {problem: '4.17', answer: 5, procent: 95, type: 'Сложение, умножение вероятностей'},
    {problem: '4.18', answer: 2, procent: 55, type: 'Сложение, умножение вероятностей'},
    {problem: '4.19', answer: 0.125, procent: 35, type: 'Классическая вероятность'},
    {problem: '4.20', answer: 0.125, procent: 35, type: 'Классическая вероятность'},
    {problem: '4.21', answer: 0.2, procent: 45, type: 'Условная вероятность'},
    {problem: '4.22', answer: 0.5, procent: 55, type: 'Условная вероятность'},
    {problem: '4.23', answer: 0.12, procent: 65, type: 'Условная вероятность'},
    {problem: '4.24', answer: 0.6, procent: 60, type: 'Условная вероятность'},
    {problem: '4.25', answer: 0.83, procent: 90, type: 'Полная вероятность'},
    {problem: '4.26', answer: 0.22, procent: 40, type: 'Предметы из ящика'},
    {problem: '4.27', answer: 0.05, procent: 45, type: 'Классическая вероятность'},
    {problem: '4.28', answer: 0.96, procent: 75, type: 'Классическая вероятность'},
    {problem: '4.29', answer: 0.35, procent: 10, type: 'Сложение, умножение вероятностей'},
    {problem: '4.30', answer: 0.27, procent: 30, type: 'Сложение, умножение вероятностей'},
    {problem: '4.31', answer: 0.0008, procent: 35, type: 'Сложение, умножение вероятностей'},
    {problem: '4.32', answer: 0.9604, procent: 40, type: 'Сложение, умножение вероятностей'},
    {problem: '4.33', answer: 0.0104, procent: 35, type: 'Сложение, умножение вероятностей'},
    {problem: '4.34', answer: 0.07, procent: 45, type: 'Сложение, умножение вероятностей'},
    {problem: '4.35', answer: 0.0064, procent: 50, type: 'Сложение, умножение вероятностей'},
    {problem: '4.36', answer: 0.9856, procent: 65, type: 'Сложение, умножение вероятностей'},
    {problem: '4.37', answer: 0.271, procent: 55, type: 'Сложение, умножение вероятностей'},
    {problem: '4.38', answer: 0.28, procent: 70, type: 'Сложение, умножение вероятностей'},
    {problem: '4.39', answer: 0.07, procent: 10, type: 'Полная вероятность'},
    {problem: '4.40', answer: 0.81, procent: 80, type: 'Полная вероятность'},
    {problem: '4.41', answer: 0.016, procent: 40, type: 'Сложение, умножение вероятностей'},
    {problem: '4.42', answer: 0.059, procent: 60, type: 'Сложение, умножение вероятностей'},
    {problem: '4.43', answer: 5, procent: 95, type: 'Сложение, умножение вероятностей'},
    {problem: '4.44', answer: 3, procent: 55, type: 'Сложение, умножение вероятностей'},
    {problem: '4.45', answer: 0.125, procent: 35, type: 'Классическая вероятность'},
    {problem: '4.46', answer: 0.5, procent: 35, type: 'Классическая вероятность'},
    {problem: '4.47', answer: 0.2, procent: 45, type: 'Условная вероятность'},
    {problem: '4.48', answer: 0.5, procent: 50, type: 'Условная вероятность'},
    {problem: '4.49', answer: 0.08, procent: 65, type: 'Условная вероятность'},
    {problem: '4.50', answer: 0.36, procent: 80, type: 'Сложение, умножение вероятностей'},
    {problem: '4.51', answer: 0.85, procent: 90, type: 'Полная вероятность'},
    {problem: '4.52', answer: 0.24, procent: 40, type: 'Предметы из ящика'},




    {problem: '5.1', answer: -17, procent: 15, type: 'Линейные уравнения'},
    {problem: '5.2', answer: 2, procent: 40, type: 'Степенные уравнения'},
    {problem: '5.3', answer: 9, procent: 30, type: 'Степенные уравнения'},
    {problem: '5.4', answer: -1, procent: 20, type: 'Степенные уравнения'},
    {problem: '5.5', answer: 0.4, procent: 45, type: 'Линейные уравнения'},
    {problem: '5.6', answer: 12, procent: 30, type: 'Иррациональные уравнения'},
    {problem: '5.7', answer: 122, procent: 35, type: 'Иррациональные уравнения'},
    {problem: '5.8', answer: 8, procent: 90, type: 'Иррациональные уравнения'},
    {problem: '5.9', answer: -25, procent: 20, type: 'Логарифмические уравнения'},
    {problem: '5.10', answer: -1, procent: 45, type: 'Логарифмические уравнения'},
    {problem: '5.11', answer: 2, procent: 25, type: 'Логарифмические уравнения'},
    {problem: '5.12', answer: -42, procent: 50, type: 'Логарифмические уравнения'},
    {problem: '5.13', answer: 0.2, procent: 60, type: 'Логарифмические уравнения'},
    {problem: '5.14', answer: 10, procent: 80, type: 'Логарифмические уравнения'},
    {problem: '5.15', answer: -9, procent: 40, type: 'Показательные уравнения'},
    {problem: '5.16', answer: 6, procent: 50, type: 'Показательные уравнения'},
    {problem: '5.17', answer: 4.5, procent: 40, type: 'Показательные уравнения'},
    {problem: '5.18', answer: 1.5, procent: 55, type: 'Показательные уравнения'},
    {problem: '5.19', answer: 20, procent: 70, type: 'Логарифмические уравнения'},
    {problem: '5.20', answer: 5, procent: 75, type: 'Логарифмические уравнения'},
    {problem: '5.21', answer: -18, procent: 15, type: 'Линейные уравнения'},
    {problem: '5.22', answer: 1, procent: 40, type: 'Степенные уравнения'},
    {problem: '5.23', answer: 12, procent: 30, type: 'Степенные уравнения'},
    {problem: '5.24', answer: -9, procent: 20, type: 'Степенные уравнения'},
    {problem: '5.25', answer: -9, procent: 45, type: 'Линейные уравнения'},
    {problem: '5.26', answer: 25, procent: 40, type: 'Иррациональные уравнения'},
    {problem: '5.27', answer: 67, procent: 35, type: 'Иррациональные уравнения'},
    {problem: '5.28', answer: 6, procent: 95, type: 'Иррациональные уравнения'},
    {problem: '5.29', answer: -9, procent: 95, type: 'Иррациональные уравнения'},
    {problem: '5.30', answer: 12, procent: 20, type: 'Логарифмические уравнения'},
    {problem: '5.31', answer: -9.5, procent: 45, type: 'Логарифмические уравнения'},
    {problem: '5.32', answer: -96, procent: 50, type: 'Логарифмические уравнения'},
    {problem: '5.33', answer: 3, procent: 45, type: 'Логарифмические уравнения'},
    {problem: '5.34', answer: -14, procent: 65, type: 'Логарифмические уравнения'},
    {problem: '5.35', answer: 7, procent: 80, type: 'Логарифмические уравнения'},
    {problem: '5.36', answer: 6, procent: 50, type: 'Логарифмические уравнения'},
    {problem: '5.37', answer: 1, procent: 40, type: 'Показательные уравнения'},
    {problem: '5.38', answer: -1, procent: 55, type: 'Показательные уравнения'},
    {problem: '5.39', answer: 1.5, procent: 50, type: 'Показательные уравнения'},
    {problem: '5.40', answer: 0.4, procent: 45, type: 'Показательные уравнения'},
    {problem: '5.41', answer: -508, procent: 45, type: 'Логарифмические уравнения'},
    {problem: '5.42', answer: -1, procent: 30, type: 'Степенные уравнения'},
    {problem: '5.43', answer: 7, procent: 25, type: 'Логарифмические уравнения'},
    {problem: '5.44', answer: 8, procent: 25, type: 'Показательные уравнения'},
    {problem: '5.45', answer: -6, procent: 25, type: 'Показательные уравнения'},
    {problem: '5.46', answer: -40, procent: 40, type: 'Логарифмические уравнения'},
    {problem: '5.47', answer: -5, procent: 35, type: 'Логарифмические уравнения'},
    {problem: '5.48', answer: 4, procent: 25, type: 'Иррациональные уравнения'},
    {problem: '5.49', answer: -1, procent: 35, type: 'Линейные уравнения'},
    {problem: '5.50', answer: -3.4, procent: 55, type: 'Линейные уравнения'},
    {problem: '5.51', answer: 4, procent: 35, type: 'Иррациональные уравнения'},
    {problem: '5.52', answer: 11, procent: 25, type: 'Степенные уравнения'},
    {problem: '5.53', answer: 1, procent: 25, type: 'Иррациональные уравнения'},
    {problem: '5.54', answer: 58, procent: 45, type: 'Иррациональные уравнения'},
    {problem: '5.55', answer: 8, procent: 10, type: 'Логарифмические уравнения'},



    {problem: '6.1', answer: 25, procent: 20, type: 'Степени'},
    {problem: '6.2', answer: 16, procent: 35, type: 'Степени'},
    {problem: '6.3', answer: 27, procent: 60, type: 'Степени'},
    {problem: '6.4', answer: 4, procent: 55, type: 'Степени'},
    {problem: '6.5', answer: 243, procent: 50, type: 'Степени'},
    {problem: '6.6', answer: 7, procent: 75, type: 'Степени'},
    {problem: '6.7', answer: 1.5, procent: 60, type: 'Степени'},
    {problem: '6.8', answer: 0.8, procent: 80, type: 'Степени'},
    {problem: '6.9', answer: 12, procent: 80, type: 'Степени'},
    {problem: '6.10', answer: -18, procent: 35, type: 'Корни'},
    {problem: '6.11', answer: 2, procent: 15, type: 'Корни'},
    {problem: '6.12', answer: 2, procent: 40, type: 'Корни'},
    {problem: '6.13', answer: 0.2, procent: 50, type: 'Корни'},
    {problem: '6.14', answer: 690, procent: 45, type: 'Корни'},
    {problem: '6.15', answer: 5, procent: 55, type: 'Корни'},
    {problem: '6.16', answer: 2, procent: 45, type: 'Корни'},
    {problem: '6.17', answer: -3, procent: 40, type: 'Тригонометрия'},
    {problem: '6.18', answer: 21, procent: 60, type: 'Тригонометрия'},
    {problem: '6.19', answer: -12, procent: 40, type: 'Тригонометрия'},
    {problem: '6.20', answer: -0.7, procent: 70, type: 'Тригонометрия'},
    {problem: '6.21', answer: 0.8, procent: 70, type: 'Тригонометрия'},
    {problem: '6.22', answer: 8, procent: 50, type: 'Тригонометрия'},
    {problem: '6.23', answer: -21, procent: 85, type: 'Тригонометрия'},
    {problem: '6.24', answer: -8, procent: 60, type: 'Тригонометрия'},
    {problem: '6.25', answer: 3, procent: 70, type: 'Тригонометрия'},
    {problem: '6.26', answer: 4.5, procent: 70, type: 'Тригонометрия'},
    {problem: '6.27', answer: 1, procent: 70, type: 'Тригонометрия'},
    {problem: '6.28', answer: -3.5, procent: 75, type: 'Тригонометрия'},
    {problem: '6.29', answer: -0.5, procent: 70, type: 'Тригонометрия'},
    {problem: '6.30', answer: -6, procent: 25, type: 'Тригонометрия'},
    {problem: '6.31', answer: 59, procent: 35, type: 'Тригонометрия'},
    {problem: '6.32', answer: -13, procent: 40, type: 'Тригонометрия'},
    {problem: '6.33', answer: 14, procent: 45, type: 'Тригонометрия'},
    {problem: '6.34', answer: 4.8, procent: 60, type: 'Тригонометрия'},
    {problem: '6.35', answer: 2, procent: 30, type: 'Логарифмы'},
    {problem: '6.36', answer: 6, procent: 40, type: 'Логарифмы'},
    {problem: '6.37', answer: 3, procent: 55, type: 'Логарифмы'},
    {problem: '6.38', answer: 2, procent: 60, type: 'Логарифмы'},
    {problem: '6.39', answer: 0, procent: 65, type: 'Логарифмы'},
    {problem: '6.40', answer: 6, procent: 30, type: 'Логарифмы'},
    {problem: '6.41', answer: 2, procent: 70, type: 'Логарифмы'},
    {problem: '6.42', answer: 2, procent: 45, type: 'Логарифмы'},
    {problem: '6.43', answer: -0.5, procent: 60, type: 'Логарифмы'},
    {problem: '6.44', answer: -4, procent: 75, type: 'Логарифмы'},
    {problem: '6.45', answer: 64, procent: 20, type: 'Степени'},
    {problem: '6.46', answer: 25, procent: 35, type: 'Степени'},
    {problem: '6.47', answer: 128, procent: 60, type: 'Степени'},
    {problem: '6.48', answer: 1, procent: 55, type: 'Степени'},
    {problem: '6.49', answer: 59049, procent: 70, type: 'Степени'},
    {problem: '6.50', answer: 121, procent: 75, type: 'Степени'},
    {problem: '6.51', answer: 24.5, procent: 60, type: 'Степени'},
    {problem: '6.52', answer: 0.75, procent: 80, type: 'Степени'},
    {problem: '6.53', answer: 20, procent: 80, type: 'Степени'},
    {problem: '6.54', answer: 7, procent: 35, type: 'Корни'},
    {problem: '6.55', answer: 2.4, procent: 15, type: 'Корни'},
    {problem: '6.56', answer: 7, procent: 40, type: 'Корни'},
    {problem: '6.57', answer: 2, procent: 50, type: 'Корни'},
    {problem: '6.58', answer: 352, procent: 45, type: 'Корни'},
    {problem: '6.59', answer: 6, procent: 55, type: 'Корни'},
    {problem: '6.60', answer: 5, procent: 45, type: 'Корни'},
    {problem: '6.61', answer: -3.5, procent: 40, type: 'Корни'},
    {problem: '6.62', answer: 2, procent: 60, type: 'Тригонометрия'},
    {problem: '6.63', answer: -6, procent: 40, type: 'Тригонометрия'},
    {problem: '6.64', answer: 0.9, procent: 70, type: 'Тригонометрия'},
    {problem: '6.65', answer: -0.4, procent: 70, type: 'Тригонометрия'},
    {problem: '6.66', answer: 6, procent: 50, type: 'Тригонометрия'},
    {problem: '6.67', answer: -28, procent: 85, type: 'Тригонометрия'},
    {problem: '6.68', answer: 2, procent: 60, type: 'Тригонометрия'},
    {problem: '6.69', answer: 6, procent: 70, type: 'Тригонометрия'},
    {problem: '6.70', answer: 1.5, procent: 70, type: 'Тригонометрия'},
    {problem: '6.71', answer: 4, procent: 70, type: 'Тригонометрия'},
    {problem: '6.72', answer: -2.5, procent: 75, type: 'Тригонометрия'},
    {problem: '6.73', answer: -0.5, procent: 70, type: 'Тригонометрия'},
    {problem: '6.74', answer: 14, procent: 25, type: 'Тригонометрия'},
    {problem: '6.75', answer: 4, procent: 35, type: 'Тригонометрия'},
    {problem: '6.76', answer: -36, procent: 40, type: 'Тригонометрия'},
    {problem: '6.77', answer: 26, procent: 45, type: 'Тригонометрия'},
    {problem: '6.78', answer: 9.5, procent: 60, type: 'Тригонометрия'},
    {problem: '6.79', answer: 3, procent: 30, type: 'Логарифмы'},
    {problem: '6.80', answer: 2, procent: 40, type: 'Логарифмы'},
    {problem: '6.81', answer: 2, procent: 55, type: 'Логарифмы'},
    {problem: '6.82', answer: 2, procent: 60, type: 'Логарифмы'},
    {problem: '6.83', answer: 1, procent: 65, type: 'Логарифмы'},
    {problem: '6.84', answer: 4, procent: 30, type: 'Логарифмы'},
    {problem: '6.85', answer: 3, procent: 70, type: 'Логарифмы'},
    {problem: '6.86', answer: 13, procent: 45, type: 'Логарифмы'},
    {problem: '6.87', answer: -0.5, procent: 60, type: 'Логарифмы'},
    {problem: '6.88', answer: -3, procent: 75, type: 'Логарифмы'},



    {problem: '7.1', answer: 4, procent: 45, type: 'График функции'},
    {problem: '7.2', answer: 4, procent: 45, type: 'График функции'},
    {problem: '7.3', answer: 9, procent: 60, type: 'График функции'},
    {problem: '7.4', answer: 2, procent: 50, type: 'График функции'},
    {problem: '7.5', answer: 4, procent: 50, type: 'График функции'},
    {problem: '7.6', answer: 8, procent: 80, type: 'График функции'},
    {problem: '7.7', answer: 3, procent: 40, type: 'График производной'},
    {problem: '7.8', answer: 5, procent: 40, type: 'График производной'},
    {problem: '7.9', answer: 4, procent: 75, type: 'График производной'},
    {problem: '7.10', answer: -2, procent: 50, type: 'График производной'},
    {problem: '7.11', answer: 7, procent: 60, type: 'График производной'},
    {problem: '7.12', answer: 4, procent: 60, type: 'График производной'},
    {problem: '7.13', answer: 1, procent: 80, type: 'График производной'},
    {problem: '7.14', answer: 1, procent: 80, type: 'График производной'},
    {problem: '7.15', answer: 3, procent: 60, type: 'Эскиз функции'},
    {problem: '7.16', answer: -5, procent: 60, type: 'Эскиз функции'},
    {problem: '7.17', answer: -4, procent: 60, type: 'Эскиз функции'},
    {problem: '7.18', answer: 2, procent: 60, type: 'Эскиз функции'},
    {problem: '7.19', answer: 3, procent: 35, type: 'Геометрический смысл производной'},
    {problem: '7.20', answer: 0.25, procent: 35, type: 'Геометрический смысл производной'},
    {problem: '7.21', answer: -1.25, procent: 40, type: 'Геометрический смысл производной'},
    {problem: '7.22', answer: -0.25, procent: 40, type: 'Геометрический смысл производной'},
    {problem: '7.23', answer: 6, procent: 60, type: 'Физический смысл производной'},
    {problem: '7.24', answer: 18, procent: 65, type: 'Физический смысл производной'},
    {problem: '7.25', answer: -1, procent: 75, type: 'Сравнение значений тангенсов'},
    {problem: '7.26', answer: -1, procent: 75, type: 'Сравнение значений тангенсов'},
    {problem: '7.27', answer: 6, procent: 70, type: 'Касательная параллельна или совпадает'},
    {problem: '7.28', answer: 5, procent: 85, type: 'Касательная параллельна или совпадает'},
    {problem: '7.29', answer: 5, procent: 85, type: 'Касательная параллельна или совпадает'},
    {problem: '7.30', answer: 3, procent: 80, type: 'Касательная параллельна или совпадает'},
    {problem: '7.31', answer: 20, procent: 80, type: 'Условие касания'},
    {problem: '7.32', answer: 7, procent: 85, type: 'Первообразная'},
    {problem: '7.33', answer: 3, procent: 85, type: 'Первообразная'},
    {problem: '7.34', answer: 3, procent: 85, type: 'Первообразная'},
    {problem: '7.35', answer: 20, procent: 80, type: 'Первообразная'},
    {problem: '7.36', answer: 6, procent: 100, type: 'Первообразная'},
    {problem: '7.37', answer: 6, procent: 100, type: 'Первообразная'},
    {problem: '7.38', answer: 3, procent: 45, type: 'График функции'},
    {problem: '7.39', answer: 3, procent: 45, type: 'График функции'},
    {problem: '7.40', answer: 6, procent: 60, type: 'График функции'},
    {problem: '7.41', answer: -4, procent: 50, type: 'График функции'},
    {problem: '7.42', answer: 4, procent: 50, type: 'График функции'},
    {problem: '7.43', answer: 5, procent: 80, type: 'График функции'},
    {problem: '7.44', answer: 4, procent: 40, type: 'График производной'},
    {problem: '7.45', answer: 9, procent: 40, type: 'График производной'},
    {problem: '7.46', answer: 3, procent: 75, type: 'График производной'},
    {problem: '7.47', answer: 4, procent: 50, type: 'График производной'},
    {problem: '7.48', answer: -1, procent: 60, type: 'График производной'},
    {problem: '7.49', answer: 9, procent: 60, type: 'График производной'},
    {problem: '7.50', answer: 3, procent: 80, type: 'График производной'},
    {problem: '7.51', answer: 4, procent: 80, type: 'График производной'},
    {problem: '7.52', answer: -1, procent: 60, type: 'Эскиз функции'},
    {problem: '7.53', answer: -7, procent: 60, type: 'Эскиз функции'},
    {problem: '7.54', answer: 3, procent: 60, type: 'Эскиз функции'},
    {problem: '7.55', answer: -2, procent: 60, type: 'Эскиз функции'},
    {problem: '7.56', answer: 0.6, procent: 35, type: 'Геометрический смысл производной'},
    {problem: '7.57', answer: 0.4, procent: 35, type: 'Геометрический смысл производной'},
    {problem: '7.58', answer: -0.2, procent: 40, type: 'Геометрический смысл производной'},
    {problem: '7.59', answer: -0.25, procent: 40, type: 'Геометрический смысл производной'},
    {problem: '7.60', answer: 6, procent: 60, type: 'Физический смысл производной'},
    {problem: '7.61', answer: 8, procent: 65, type: 'Физический смысл производной'},
    {problem: '7.62', answer: 2, procent: 75, type: 'Сравнение значений тангенсов'},
    {problem: '7.63', answer: 1, procent: 75, type: 'Сравнение значений тангенсов'},
    {problem: '7.64', answer: 6, procent: 70, type: 'Касательная параллельна или совпадает'},
    {problem: '7.65', answer: 0, procent: 85, type: 'Касательная параллельна или совпадает'},
    {problem: '7.66', answer: 2, procent: 85, type: 'Касательная параллельна или совпадает'},
    {problem: '7.67', answer: -3, procent: 80, type: 'Касательная параллельна или совпадает'},
    {problem: '7.68', answer: 17, procent: 80, type: 'Условие касания'},
    {problem: '7.69', answer: 4, procent: 85, type: 'Первообразная'},
    {problem: '7.70', answer: 5, procent: 85, type: 'Первообразная'},
    {problem: '7.71', answer: 4, procent: 85, type: 'Первообразная'},
    {problem: '7.72', answer: 24, procent: 80, type: 'Первообразная'},
    {problem: '7.73', answer: 6.75, procent: 100, type: 'Первообразная'},
    {problem: '7.74', answer: 4.95, procent: 100, type: 'Первообразная'},


    {problem: '8.1', answer: 25, procent: 40, type: 'Квадратичная формула'},
    {problem: '8.2', answer: 6, procent: 80, type: 'Квадратичная формула'},
    {problem: '8.3', answer: 4.27, procent: 75, type: 'Квадратичная формула'},
    {problem: '8.4', answer: 48, procent: 50, type: 'Квадратичная формула'},
    {problem: '8.5', answer: 1.4, procent: 55, type: 'Квадратичная формула'},
    {problem: '8.6', answer: 6, procent: 90, type: 'Квадратичная формула'},
    {problem: '8.7', answer: 5, procent: 85, type: 'Квадратичная формула'},
    {problem: '8.8', answer: 17, procent: 25, type: 'Рациональная формула'},
    {problem: '8.9', answer: 4, procent: 35, type: 'Рациональная формула'},
    {problem: '8.10', answer: 88, procent: 20, type: 'Рациональная формула'},
    {problem: '8.11', answer: 340, procent: 45, type: 'Рациональная формула'},
    {problem: '8.12', answer: 312, procent: 50, type: 'Рациональная формула'},
    {problem: '8.13', answer: 506, procent: 60, type: 'Рациональная формула'},
    {problem: '8.14', answer: 220.5, procent: 65, type: 'Рациональная формула'},
    {problem: '8.15', answer: 12, procent: 35, type: 'Рациональная формула'},
    {problem: '8.16', answer: 12, procent: 90, type: 'Рациональная формула'},
    {problem: '8.17', answer: 5500, procent: 40, type: 'Иррациональная формула'},
    {problem: '8.18', answer: 0.72, procent: 45, type: 'Иррациональная формула'},
    {problem: '8.19', answer: 320, procent: 60, type: 'Иррациональная формула'},
    {problem: '8.20', answer: 15, procent: 55, type: 'Показательная формула'},
    {problem: '8.21', answer: 8, procent: 95, type: 'Показательная формула'},
    {problem: '8.22', answer: 9.2, procent: 100, type: 'Показательная формула'},
    {problem: '8.23', answer: 7, procent: 60, type: 'Логарифмическая формула'},
    {problem: '8.24', answer: 33, procent: 65, type: 'Логарифмическая формула'},
    {problem: '8.25', answer: 8.5, procent: 85, type: 'Логарифмическая формула'},
    {problem: '8.26', answer: 30, procent: 60, type: 'Тригонометрическая формула'},
    {problem: '8.27', answer: 60, procent: 70, type: 'Тригонометрическая формула'},
    {problem: '8.28', answer: 60, procent: 70, type: 'Тригонометрическая формула'},
    {problem: '8.29', answer: 42, procent: 65, type: 'Рациональная формула'},
    {problem: '8.30', answer: 8, procent: 50, type: 'Квадратичная формула'},
    {problem: '8.31', answer: 14, procent: 50, type: 'Квадратичная формула'},
    {problem: '8.32', answer: 0.18, procent: 85, type: 'Тригонометрическая формула'},
    {problem: '8.33', answer: 24, procent: 90, type: 'Рациональная формула'},
    {problem: '8.34', answer: 6000, procent: 90, type: 'Показательная формула'},
    {problem: '8.35', answer: 0.79, procent: 80, type: 'Рациональная формула'},
    {problem: '8.36', answer: 0.265, procent: 70, type: 'Рациональная формула'},

    {problem: '8.37', answer: 30, procent: 40, type: 'Квадратичная формула'},
    {problem: '8.38', answer: 20, procent: 80, type: 'Квадратичная формула'},
    {problem: '8.39', answer: 3.79, procent: 75, type: 'Квадратичная формула'},
    {problem: '8.40', answer: 42, procent: 50, type: 'Квадратичная формула'},
    {problem: '8.41', answer: 0.4, procent: 55, type: 'Квадратичная формула'},
    {problem: '8.42', answer: 1, procent: 90, type: 'Квадратичная формула'},
    {problem: '8.43', answer: 4, procent: 85, type: 'Квадратичная формула'},
    {problem: '8.44', answer: 9, procent: 25, type: 'Рациональная формула'},
    {problem: '8.45', answer: 2.8, procent: 35, type: 'Рациональная формула'},
    {problem: '8.46', answer: 27.5, procent: 20, type: 'Рациональная формула'},
    {problem: '8.47', answer: 260, procent: 45, type: 'Рациональная формула'},
    {problem: '8.48', answer: 319, procent: 50, type: 'Рациональная формула'},
    {problem: '8.49', answer: 753, procent: 60, type: 'Рациональная формула'},
    {problem: '8.50', answer: 253, procent: 65, type: 'Рациональная формула'},
    {problem: '8.51', answer: 45, procent: 35, type: 'Рациональная формула'},
    {problem: '8.52', answer: 3.5, procent: 90, type: 'Рациональная формула'},
    {problem: '8.53', answer: 0.9, procent: 40, type: 'Иррациональная формула'},
    {problem: '8.54', answer: 0.98, procent: 45, type: 'Иррациональная формула'},
    {problem: '8.55', answer: 20, procent: 60, type: 'Иррациональная формула'},
    {problem: '8.56', answer: 10, procent: 55, type: 'Показательная формула'},
    {problem: '8.57', answer: 125, procent: 95, type: 'Показательная формула'},
    {problem: '8.58', answer: 9.9, procent: 100, type: 'Показательная формула'},
    {problem: '8.59', answer: 2.5, procent: 60, type:  'Логарифмическая формула'},
    {problem: '8.60', answer: 33, procent: 65, type:  'Логарифмическая формула'},
    {problem: '8.61', answer: 5.5, procent: 85, type:  'Логарифмическая формула'},
    {problem: '8.62', answer: 90, procent: 60, type: 'Тригонометрическая формула'},
    {problem: '8.63', answer: 90, procent: 70, type: 'Тригонометрическая формула'},
    {problem: '8.64', answer: 60, procent: 70, type: 'Тригонометрическая формула'},
    {problem: '8.65', answer: 2.1, procent: 65, type: 'Рациональная формула'},
    {problem: '8.66', answer: 10, procent: 50, type: 'Квадратичная формула'},
    {problem: '8.67', answer: 12, procent: 50, type: 'Квадратичная формула'},
    {problem: '8.68', answer: 0.38, procent: 85, type: 'Тригонометрическая формула'},
    {problem: '8.69', answer: 105, procent: 90, type: 'Рациональная формула'},
    {problem: '8.70', answer: 5000, procent: 90, type: 'Показательная формула'},
    {problem: '8.71', answer: 0.47, procent: 80, type: 'Рациональная формула'},
    {problem: '8.72', answer: 0.445, procent: 70, type: 'Рациональная формула'},



    {problem: '9.1', answer: 14, procent: 20, type: 'Движение по прямой'},
    {problem: '9.2', answer: 10, procent: 20, type: 'Движение по прямой'},
    {problem: '9.3', answer: 11, procent: 35, type: 'Движение по прямой'},
    {problem: '9.4', answer: 17, procent: 35, type: 'Движение по прямой'},
    {problem: '9.5', answer: 10, procent: 45, type: 'Движение по прямой'},
    {problem: '9.6', answer: 5, procent: 50, type: 'Движение по прямой'},
    {problem: '9.7', answer: 15, procent: 55, type: 'Движение по прямой'},
    {problem: '9.8', answer: 50, procent: 45, type:'Движение по прямой' },
    {problem: '9.9', answer: 1, procent: 65, type: 'Движение по прямой'},
    {problem: '9.10', answer: 240, procent: 95, type: 'Движение по воде'},
    {problem: '9.11', answer: 14, procent: 40, type: 'Движение по воде'},
    {problem: '9.12', answer: 2, procent: 35, type: 'Движение по воде'},
    {problem: '9.13', answer: 9, procent: 45, type: 'Движение по воде'},
    {problem: '9.14', answer: 2, procent: 40, type: 'Движение по воде'},
    {problem: '9.15', answer: 3, procent: 55, type: 'Движение по воде'},
    {problem: '9.16', answer: 20, procent: 55, type: 'Движение по воде'},
    {problem: '9.17', answer: 756, procent: 80, type: 'Движение по воде'},
    {problem: '9.18', answer: 7, procent: 65, type: 'Движение по воде'},
    {problem: '9.19', answer: 20, procent: 70, type: 'Движение по воде'},
    {problem: '9.20', answer: 55, procent: 50, type: 'Движение по прямой'},
    {problem: '9.21', answer: 90, procent: 50, type: 'Движение по прямой'},
    {problem: '9.22', answer: 18, procent: 40, type: 'Смеси и сплавы'},
    {problem: '9.23', answer: 16, procent: 55, type: 'Смеси и сплавы'},
    {problem: '9.24', answer: 18, procent: 70, type: 'Смеси и сплавы'},
    {problem: '9.25', answer: 18, procent: 75, type: 'Смеси и сплавы'},
    {problem: '9.26', answer: 30, procent: 75, type: 'Смеси и сплавы'},
    {problem: '9.27', answer: 15, procent: 90, type: 'Смеси и сплавы'},
    {problem: '9.28', answer: 28, procent: 85, type: 'Смеси и сплавы'},
    {problem: '9.29', answer: 15, procent: 90, type: 'Смеси и сплавы'},
    {problem: '9.30', answer: 10, procent: 30, type: 'Проценты'},
    {problem: '9.31', answer: 27, procent: 80, type: 'Проценты'},
    {problem: '9.32', answer: 189, procent: 100, type: 'Проценты'},
    {problem: '9.33', answer: 20, procent: 45, type: 'Проценты'},
    {problem: '9.34', answer: 10, procent: 25, type: 'Производительность'},
    {problem: '9.35', answer: 16, procent: 25, type: 'Производительность'},
    {problem: '9.36', answer: 14, procent: 25, type: 'Производительность'},
    {problem: '9.37', answer: 10, procent: 65, type: 'Производительность'},
    {problem: '9.38', answer: 10, procent: 25, type: 'Производительность'},
    {problem: '9.39', answer: 25, procent: 65, type: 'Производительность'},
    {problem: '9.40', answer: 8, procent: 70, type: 'Производительность'},
    {problem: '9.41', answer: 30, procent: 65, type: 'Производительность'},
    {problem: '9.42', answer: 10, procent: 55, type: 'Производительность'},
    {problem: '9.43', answer: 78, procent: 75, type: 'Производительность'},
    {problem: '9.44', answer: 8.4, procent: 85, type: 'Совместная работа'},
    {problem: '9.45', answer: 14, procent: 20, type: 'Движение по прямой'},
    {problem: '9.46', answer: 60, procent: 20, type: 'Движение по прямой'},
    {problem: '9.47', answer: 9, procent: 35, type: 'Движение по прямой'},
    {problem: '9.48', answer: 19, procent: 35, type: 'Движение по прямой'},
    {problem: '9.49', answer: 10, procent: 45, type: 'Движение по прямой'},
    {problem: '9.50', answer: 3, procent: 50, type: 'Движение по прямой'},
    {problem: '9.51', answer: 15, procent: 55, type: 'Движение по прямой'},
    {problem: '9.52', answer: 60, procent: 45, type: 'Движение по прямой'},
    {problem: '9.53', answer: 1, procent: 65, type: 'Движение по прямой'},
    {problem: '9.54', answer: 360, procent: 95, type: 'Движение по прямой'},
    {problem: '9.55', answer: 13, procent: 40, type: 'Движение по воде'},
    {problem: '9.56', answer: 3, procent: 35, type: 'Движение по воде'},
    {problem: '9.57', answer: 20, procent: 45, type: 'Движение по воде'},
    {problem: '9.58', answer: 1, procent: 40, type: 'Движение по воде'},
    {problem: '9.59', answer: 1, procent: 55, type: 'Движение по воде'},
    {problem: '9.60', answer: 20, procent: 55, type: 'Движение по воде'},
    {problem: '9.61', answer: 630, procent: 80, type: 'Движение по воде'},
    {problem: '9.62', answer: 6, procent: 65, type: 'Движение по воде'},
    {problem: '9.63', answer: 22, procent: 70, type: 'Движение по воде'},
    {problem: '9.64', answer: 90, procent: 50, type: 'Движение по прямой'},
    {problem: '9.65', answer: 80, procent: 50, type: 'Движение по прямой'},
    {problem: '9.66', answer: 13, procent: 40, type: 'Смеси и сплавы'},
    {problem: '9.67', answer: 7, procent: 55, type: 'Смеси и сплавы'},
    {problem: '9.68', answer: 63, procent: 70, type: 'Смеси и сплавы'},
    {problem: '9.69', answer: 12, procent: 75, type: 'Смеси и сплавы'},
    {problem: '9.70', answer: 35, procent: 75, type: 'Смеси и сплавы'},
    {problem: '9.71', answer: 40, procent: 90, type: 'Смеси и сплавы'},
    {problem: '9.72', answer: 14, procent: 85, type: 'Смеси и сплавы'},
    {problem: '9.73', answer: 35, procent: 90, type: 'Смеси и сплавы'},
    {problem: '9.74', answer: 35, procent: 30, type: 'Проценты'},
    {problem: '9.75', answer: 43, procent: 80, type: 'Проценты'},
    {problem: '9.76', answer: 36, procent: 100, type: 'Проценты'},
    {problem: '9.77', answer: 10, procent: 45, type: 'Проценты'},
    {problem: '9.78', answer: 11, procent: 25, type: 'Производительность'},
    {problem: '9.79', answer: 11, procent: 25, type: 'Производительность'},
    {problem: '9.80', answer: 31, procent: 25, type: 'Производительность'},
    {problem: '9.81', answer: 20, procent: 65, type: 'Производительность'},
    {problem: '9.82', answer: 15, procent: 25, type: 'Производительность'},
    {problem: '9.83', answer: 25, procent: 65, type: 'Производительность'},
    {problem: '9.84', answer: 9, procent: 70, type: 'Производительность'},
    {problem: '9.85', answer: 26, procent: 65, type: 'Производительность'},
    {problem: '9.86', answer: 6, procent: 55, type: 'Совместная работа'},
    {problem: '9.87', answer: 72, procent: 75, type: 'Совместная работа'},
    {problem: '9.88', answer: 5.6, procent: 85, type: 'Совместная работа'},

    



    {problem: '10.1', answer: 13, procent: 35, type: 'Прямая'},
    {problem: '10.2', answer: -7, procent: 40, type: 'Прямая'},
    {problem: '10.3', answer: 12, procent: 30, type: 'Парабола'},
    {problem: '10.4', answer: 41, procent: 45, type: 'Парабола'},
    {problem: '10.5', answer: 61, procent: 30, type: 'Парабола'},
    {problem: '10.6', answer: -67, procent: 60, type: 'Парабола'},
    {problem: '10.7', answer: -0.1, procent: 15, type: 'Гипербола'},
    {problem: '10.8', answer: 0.75, procent: 40, type: 'Гипербола'},
    {problem: '10.9', answer: -15, procent: 65, type: 'Гипербола'},
    {problem: '10.10', answer: 0.15, procent: 65, type: 'Гипербола'},
    {problem: '10.11', answer: 6.5, procent: 40, type: 'Иррациональная функция'},
    {problem: '10.12', answer: 32, procent: 50, type: 'Иррациональная функция'},
    {problem: '10.13', answer: 8, procent: 25, type: 'Показательная функция'},
    {problem: '10.14', answer: 16, procent: 25, type: 'Показательная функция'},
    {problem: '10.15', answer: 61, procent: 45, type: 'Показательная функция'},
    {problem: '10.16', answer: -4, procent: 45, type: 'Показательная функция'},
    {problem: '10.17', answer: -3, procent: 25, type: 'Логарифмическая функция'},
    {problem: '10.18', answer: 4, procent: 20, type: 'Логарифмическая функция'},
    {problem: '10.19', answer: 2, procent: 50, type: 'Логарифмическая функция'},
    {problem: '10.20', answer: 16, procent: 55, type: 'Логарифмическая функция'},
    {problem: '10.21', answer: 3, procent: 65, type: 'Пересечение графиков'},
    {problem: '10.22', answer: -11, procent: 80, type: 'Пересечение графиков'},
    {problem: '10.23', answer: 4, procent: 65, type: 'Пересечение графиков'},
    {problem: '10.24', answer: 8, procent: 80, type: 'Пересечение графиков'},
    {problem: '10.25', answer: -10, procent: 85, type: 'Пересечение графиков'},
    {problem: '10.26', answer: 16, procent: 70, type: 'Пересечение графиков'},
    {problem: '10.27', answer: 11, procent: 35, type: 'Прямая'},
    {problem: '10.28', answer: 14, procent: 40, type: 'Прямая'},
    {problem: '10.29', answer: 20, procent: 30, type: 'Парабола'},
    {problem: '10.30', answer: 53, procent: 45, type: 'Парабола'},
    {problem: '10.31', answer: -13, procent: 30, type: 'Парабола'},
    {problem: '10.32', answer: 20, procent: 60, type: 'Парабола'},
    {problem: '10.33', answer: 0.1, procent: 15, type: 'Гипербола'},
    {problem: '10.34', answer: -2.96, procent: 65, type: 'Гипербола'},
    {problem: '10.35', answer: -0.25, procent: 65, type: 'Гипербола'},
    {problem: '10.36', answer: -0.25, procent: 40, type: 'Гипербола'},
    {problem: '10.37', answer: -2.4, procent: 50, type: 'Иррациональная функция'},
    {problem: '10.38', answer: 24.5, procent: 25, type: 'Иррациональная функция'},
    {problem: '10.39', answer: 16, procent: 25, type: 'Показательная функция'},
    {problem: '10.40', answer: 8, procent: 25, type: 'Показательная функция'},
    {problem: '10.41', answer: 29, procent: 45, type: 'Показательная функция'},
    {problem: '10.42', answer: 6, procent: 45, type: 'Показательная функция'},
    {problem: '10.43', answer: -4, procent: 25, type: 'Логарифмическая функция'},
    {problem: '10.44', answer: 3, procent: 20, type: 'Логарифмическая функция'},
    {problem: '10.45', answer: 1, procent: 50, type: 'Логарифмическая функция'},
    {problem: '10.46', answer: 64, procent: 55, type: 'Логарифмическая функция'},
    {problem: '10.47', answer: 4, procent: 65, type: 'Пересечение графиков'},
    {problem: '10.48', answer: -11, procent: 80, type: 'Пересечение графиков'},
    {problem: '10.49', answer: 5, procent: 65, type: 'Пересечение графиков'},
    {problem: '10.50', answer: 8, procent: 80, type: 'Пересечение графиков'},
    {problem: '10.51', answer: 8, procent: 85, type: 'Пересечение графиков'},
    {problem: '10.52', answer: 36, procent: 70, type: 'Пересечение графиков'},
    {problem: '10.53', answer: 7, procent: 55, type: 'Пересечение графиков'},
    {problem: '10.54', answer: 6, procent: 55, type: 'Пересечение графиков'},
    {problem: '10.55', answer: 5, procent: 25, type: 'Логарифмическая функция'},
    {problem: '10.56', answer: 27, procent: 40, type: 'Показательная функция'},
    {problem: '10.57', answer: 0.2, procent: 45, type: 'Гипербола'},



    {problem: '11.1', answer: 21, procent: 35, type: 'Степенная функция'},
    {problem: '11.2', answer: 19, procent: 35, type: 'Степенная функция'},
    {problem: '11.3', answer: -8, procent: 55, type: 'Степенная функция'},
    {problem: '11.4', answer: 1, procent: 50, type: 'Степенная функция'},
    {problem: '11.5', answer: 44, procent: 75, type: 'Степенная функция'},
    {problem: '11.6', answer: 25, procent: 40, type: 'Степенная функция'},
    {problem: '11.7', answer: 81, procent: 45, type: 'Степенная функция'},
    {problem: '11.8', answer: -77, procent: 65, type: 'Степенная функция'},
    {problem: '11.9', answer: 2, procent: 80, type: 'Степенная функция'},
    {problem: '11.10', answer: -4, procent: 85, type: 'Степенная функция'},
    {problem: '11.11', answer: -2, procent: 85, type: 'Степенная функция'},
    {problem: '11.12', answer: 117, procent: 50, type: 'Тригонометрическая функция'},
    {problem: '11.13', answer: 29, procent: 45, type: 'Тригонометрическая функция'},
    {problem: '11.14', answer: -5, procent: 60, type: 'Тригонометрическая функция'},
    {problem: '11.15', answer: 41, procent: 45, type: 'Тригонометрическая функция'},
    {problem: '11.16', answer: 14, procent: 65, type: 'Тригонометрическая функция'},
    {problem: '11.17', answer: 7, procent: 50, type: 'Показательная функция'},
    {problem: '11.18', answer: 0, procent: 100, type: 'Показательная функция'},
    {problem: '11.19', answer: -2, procent: 55, type: 'Логарифмическая функция'},
    {problem: '11.20', answer: -8.9, procent: 60, type: 'Логарифмическая функция'},
    {problem: '11.21', answer: -2, procent: 60, type: 'Логарифмическая функция'},
    {problem: '11.22', answer: 28, procent: 40, type: 'Логарифмическая функция'},
    {problem: '11.23', answer: 6, procent: 45, type: 'Логарифмическая функция'},
    {problem: '11.24', answer: 15, procent: 40, type: 'Логарифмическая функция'},
    {problem: '11.25', answer: 8, procent: 65, type: 'Логарифмическая функция'},
    {problem: '11.26', answer: 4, procent: 50, type: 'Логарифмическая функция'},
    {problem: '11.27', answer: 0.5, procent: 85, type: 'Произведение'},
    {problem: '11.28', answer: 7, procent: 75, type: 'Произведение'},
    {problem: '11.29', answer: -21, procent: 40, type: 'Произведение'},
    {problem: '11.30', answer: 3, procent: 60, type: 'Произведение'},
    {problem: '11.31', answer: -1, procent: 45, type: 'Произведение'},
    {problem: '11.32', answer: 1, procent: 45, type: 'Произведение'},
    {problem: '11.33', answer: 2, procent: 65, type: 'Произведение'},
    {problem: '11.34', answer: -3, procent: 70, type: 'Произведение'},
    {problem: '11.35', answer: -35, procent: 50, type: 'Произведение'},
    {problem: '11.36', answer: 6, procent: 80, type: 'Частное'},
    {problem: '11.37', answer: -15, procent: 80, type: 'Частное'},
    {problem: '11.38', answer: 42, procent: 60, type: 'Частное'},
    {problem: '11.39', answer: -1005, procent: 55, type: 'Степенная функция'},
    {problem: '11.40', answer: 3, procent: 35, type: 'Степенная функция'},
    {problem: '11.41', answer: 9, procent: 55, type: 'Степенная функция'},
    {problem: '11.42', answer: -2, procent: 50, type: 'Степенная функция'},
    {problem: '11.43', answer: 3, procent: 75, type: 'Степенная функция'},
    {problem: '11.44', answer: 1, procent: 40, type: 'Степенная функция'},
    {problem: '11.45', answer: 2.25, procent: 50, type: 'Степенная функция'},
    {problem: '11.46', answer: 22, procent: 65, type: 'Степенная функция'},
    {problem: '11.47', answer: 7, procent: 80, type: 'Степенная функция'},
    {problem: '11.48', answer: 3, procent: 85, type: 'Степенная функция'},
    {problem: '11.49', answer: 1, procent: 85, type: 'Степенная функция'},
    {problem: '11.50', answer: 180, procent: 50, type: 'Тригонометрическая функция'},
    {problem: '11.51', answer: 30, procent: 45, type: 'Тригонометрическая функция'},
    {problem: '11.52', answer: 32, procent: 60, type: 'Тригонометрическая функция'},
    {problem: '11.53', answer: -35, procent: 45, type: 'Тригонометрическая функция'},
    {problem: '11.54', answer: 12, procent: 65, type: 'Тригонометрическая функция'},
    {problem: '11.55', answer: 5, procent: 50, type: 'Показательная функция'},
    {problem: '11.56', answer: -8.25, procent: 100, type: 'Показательная функция'},
    {problem: '11.57', answer: 3, procent: 55, type: 'Логарифмическая функция'},
    {problem: '11.58', answer: -6.5, procent: 60, type: 'Логарифмическая функция'},
    {problem: '11.59', answer: 3, procent: 60, type: 'Логарифмическая функция'},
    {problem: '11.60', answer: 19, procent: 40, type: 'Логарифмическая функция'},
    {problem: '11.61', answer: 5, procent: 45, type: 'Логарифмическая функция'},
    {problem: '11.62', answer: -27, procent: 40, type: 'Логарифмическая функция'},
    {problem: '11.63', answer: 4, procent: 65, type: 'Логарифмическая функция'},
    {problem: '11.64', answer: 12, procent: 50, type: 'Логарифмическая функция'},
    {problem: '11.65', answer: 1.5, procent: 85, type: 'Произведение'},
    {problem: '11.66', answer: 9, procent: 75, type: 'Произведение'},
    {problem: '11.67', answer: -5, procent: 40, type: 'Произведение'},
    {problem: '11.68', answer: 5, procent: 60, type: 'Произведение'},
    {problem: '11.69', answer: 0.5, procent: 45, type: 'Произведение'},
    {problem: '11.70', answer: -0.5, procent: 45, type: 'Произведение'},
    {problem: '11.71', answer: 2, procent: 65, type: 'Произведение'},
    {problem: '11.72', answer: -6, procent: 70, type: 'Произведение'},
    {problem: '11.73', answer: 3, procent: 50, type: 'Произведение'},
    {problem: '11.74', answer: -14, procent: 80, type: 'Частное'},
    {problem: '11.75', answer: 16, procent: 80, type: 'Частное'},
    {problem: '11.76', answer: -10, procent: 60, type: 'Частное'},
]   

const themeProblems = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 
    7: [], 8: [], 9: [], 10: [], 11: []}


// Все задания по номерам
let problems = ['-', [], [], [], [], [], [], [], [], [], [], []]


// Распределение по ключу number
allProblems.forEach(element => {
    const problemSplit = element.problem.split('.')

    element.id = +problemSplit[0] * 1000 + (+problemSplit[1])
    element.number = +problemSplit[0]

    problems[element.number].push(element)



    const thisType = element.type
    const thisThemeObject = themeProblems[element.number]
    let thisTypes = []
    for (let index = 0; index < thisThemeObject.length; index ++) thisTypes.push(thisThemeObject[index].name)
    
    if (!thisTypes.includes(thisType)) thisThemeObject.push({name: thisType, count: 1})
    else {
        for (let index = 0; index < thisThemeObject.length; index ++) {
            if (thisType === thisThemeObject[index].name) thisThemeObject[index].count ++ 
        }
    }
})



function getNormalClass(text){
    const splitText = text.split(' ')
    if (splitText.length === 1) return text
    
    let result = ''
    splitText.forEach((element, index) => result += element + (index !== splitText.length - 1 ? '_' : ''))
    result = result.replaceAll(',', 'L')
    return result
}

function getSpecialClass(text){
    return text.replaceAll('_', ' ').replaceAll('L', ',')
}



const specialVariants = ['-', 
                        {variant: ['1.1', '2.13', '3.1', '4.2', '5.1', '6.2', '7.1', '8.51', '9.1', '10.2', '11.30'], name: 'СТАТГРАД'}]




function getArrayObjectForSpecialVariants(numberVariant){
    let resultArray = []
    const thisIdArray = specialVariants[numberVariant].variant

    allProblems.forEach(element => {
        thisIdArray.includes(element.problem) && resultArray.push(element)
    })

    return resultArray

}



// Время на задачу с каким-то номером
const timeOnProblem = {
    1: [1, 1], 2: [1, 21], 3: [0, 31], 4: [1, 31], 5: [0, 46], 6: [1, 11], 
    7: [0, 41], 8: [2, 1], 9: [3, 1], 10: [2, 1], 11: [1, 21]
}


// Словарь перевода баллов из первичной во вторичную
const secondBallArray = {
    0: 0, 1: 6, 2: 11, 3: 17, 4: 22, 5: 27,
    6: 34, 7: 40, 8: 46, 9: 52, 10: 58,
    11: 64
}


// thisCountProblem неповторяющих элементов из массива problems[thisIndexProblem]
function randomProblem(thisIndexProblem, thisCountProblem) {
    let result = []
    const myArray = problems[thisIndexProblem]

    const start = getLocalStorage('fromAndTo').start
    const finish = getLocalStorage('fromAndTo').finish
    

    function getRandomInt(numberIndex) { return Math.floor(Math.random() * Math.floor(numberIndex)) }
    
    while (result.length !== thisCountProblem) {
        const randomIndex = getRandomInt(myArray.length) 
        const randomElement = myArray[randomIndex]
        const procentThis = randomElement.procent
        result.push(randomElement) 
        result = result.filter((element, index) => result.indexOf(element) === index && procentThis >= start && procentThis <= finish) // Убираем неповторяющиеся элементы
    }
    return result
}

function getObjectsFromAndTo(thisIndexProblem, start, finish){
    let result = []
    const myArray = problems[thisIndexProblem]

    myArray.forEach(element => {
        const thisProcent = element.procent
        if (thisProcent >= start && thisProcent <= finish) result.push(element)
    })

    return result
}


function withOutBadZero(text){ 
    if (!text) return ''
    else return String(+text) }

function randomVariant(countProblem){
    let result = []
    for (let i = 1; i <= 11; i ++){
        const randomProblemArray = randomProblem(i, countProblem[i])
        randomProblemArray.forEach(element => result.push(element))
    }

    return result
}

function getStar(boolean){
    if (boolean) return '&#9733'
    else return '&#10032' 
}

// Цвет задачи
function colorProcent(procent){
    if (procent < 30) return 'greenColor1'
    else if (procent < 70) return 'yellowColor1'
    else return 'redColor1'

}

function deleteOldStats(){
    const stats = getLocalStorage('stats')

    if (stats){
        const firstStats = stats[0]
        if (!firstStats.countProblem) removeLocalStorage('stats')
    }
}

deleteOldStats()

// Вывод задания на HTML на вкладку variant
function problemHTMLvariant(probl) {
    const id = probl.id
    const objSpecial = getLocalStorage('special')
    const thisBoolean = objSpecial[id]
    const textHTML = getStar(thisBoolean)

    return `<div id = ${id} class="conteyner">
    <div class="number gray" > 
        <span class='idInfo'>Номер ${probl.number} (№${probl.id}) </span> 
        <span title='Избранное задание' class="star close"> ${textHTML} </span>
        <span class='lvll'>
            Сложность: <span class='${colorProcent(probl.procent)} proc'> ${probl.procent}% </span> 
        </span>
    </div>
        <img src='/MathWeb/img/${probl.problem}.jpg' >
        <div class="answer gray1">
            Введите ответ: 
            <input class='input'> 
            <span class='conteynerRightAnswer'></span>
        </div>
    </div>`
} 


// Добавление "правильный ответ"
function getRightAnswerHTML(probl){
    return `<span class='showRightAnswer close'> 
        <span class='pokOtw'>Показать ответ: </span> 
        <span class='conteynerRightAnswer'> </span>
        <span class='rightAnswer close'>${String(probl.answer).replace('.', ',')} </span>
    </span>`
}

// Вывод задание на HTML на вкладку stress
function problemHTMLstress(probl) {
    const id = probl.id
    const objSpecial = getLocalStorage('special')
    const thisBoolean = objSpecial[id]
    const textHTML = getStar(thisBoolean)

    return `<div id = ${id} class="conteynerStress" >
    <div class="number gray" > 
        <span class='idInfo'>Номер ${probl.number} (№${probl.id}) </span> 
        <span title='Избранное задание' class="star"> ${textHTML} </span>
        <span class='lvll'>
            Сложность: <span class='${colorProcent(probl.procent)} proc'> ${probl.procent}% </span> 
        </span>
    </div>
        <img class='imgStress' src='/MathWeb/img/${probl.problem}.jpg'>
        <div class="answer gray1">
            Введите ответ: 
            <input class='input'> 
            <button class="submit"> Ответить </button>
            <span class='conteynerRightAnswer'></span>
        </div>
    </div>`
}

// Показ правильного ответа
function showRightAnswerHTML(){
    document.addEventListener('click', (event) => {
        // Если не кнопка "показать ответ" - выходим
        if (event.target.classList[0] != 'pokOtw') return
        

        // Контейнер правильного ответа; сам ответ
        const conteynerAnswer = event.target.closest('.conteynerRightAnswer')
        const rightAnswer = conteynerAnswer.querySelector('.rightAnswer')
        const showAnswer = conteynerAnswer.querySelector('.pokOtw')


        // close <--> show
        if (rightAnswer.classList[1] === 'close'){
            rightAnswer.classList.remove('close')
            rightAnswer.classList.add('show')

            showAnswer.innerHTML = 'Скрыть ответ: '
                  
        } else {
            rightAnswer.classList.remove('show')
            rightAnswer.classList.add('close')

            showAnswer.innerHTML = 'Показать ответ: '
        }


    })
}

showRightAnswerHTML()

// Вывод задания на HTML на вкладку currSubject
function problemHTMLcurr(probl) {
    const id = probl.id
    const objSpecial = getLocalStorage('special')
    const thisBoolean = objSpecial[id]
    const textHTML = getStar(thisBoolean)
    

    return `<div id = ${id} class="conteyner" >
    <div class="number gray" > 
        <span class='idInfo'>Номер ${probl.number} (№${probl.id}) </span> 
        <span title='Избранное задание' class="star"> ${textHTML} </span>
        <span class='lvll'>
            Сложность: <span class='${colorProcent(probl.procent)} proc'> ${probl.procent}% </span> 
        </span>
    </div>
        <img src='/MathWeb/img/${probl.problem}.jpg'>
        <div class="answer gray1">
            Введите ответ: 
            <input class='input'> 
            <button class="submit"> Ответить </button>
            <span class='conteynerRightAnswer'></span>
        </div>
    </div>`
}

function eventClickOnStar(){
    document.addEventListener('click', (event) => {
        if (event.target.classList[0] !== 'star') return 

        
        
        const objSpecial = getLocalStorage('special')

        let parent = event.target.closest('.conteyner')
        if (!parent) parent = event.target.closest('.conteynerStress')
        
        const starHTML = parent.querySelector('.star')
        const idThisParent = +parent.id

        const thisBoolean = objSpecial[idThisParent]
        const resultBoolean = !thisBoolean

        objSpecial[idThisParent] = resultBoolean
        setLocalStorage('special', objSpecial)

        starHTML.innerHTML = getStar(resultBoolean)
    })
}

eventClickOnStar()

function getSpecialObject(){
    const objSpecial = getLocalStorage('special')
    let result = []

    allProblems.forEach(element => {if (objSpecial[element.id]) result.push(element)})

    return result
}



// add / remove w900
function addW900(node, boolean){
    const thisNode = document.querySelector(node)
    boolean ? thisNode.classList.add('w900') : thisNode.classList.remove('w900')
}

// Сортировка массива 'thisProblems'
function sortProblem(thisSelect){
    if (thisSelect === 'oldToNew') setLocalStorage('thisProblems', getThisProblems().sort((a, b) => a.id - b.id))
    else if (thisSelect === 'newToOld') setLocalStorage('thisProblems', getThisProblems().sort((a, b) => b.id - a.id))
    else if (thisSelect === 'easyToHard') setLocalStorage('thisProblems', getThisProblems().sort((a, b) => a.procent - b.procent))
    else if (thisSelect === 'hardToEasy') setLocalStorage('thisProblems', getThisProblems().sort((a, b) => b.procent - a.procent))
}

// Создание и/или сохрание цветов
function createAndSaveColors(thisProblems){

    document.addEventListener('click', (event) => {
        if (event.target.classList[0] !== 'submit') return

        // Если нет в LocalStr createAndSaveColors, добавить gray
        if (!getLocalStorage('color')){
            const array = {}
            for (let index = 0; index < thisProblems.length; index ++) array[thisProblems[index].id] = 'gray'
            setLocalStorage('color', array)    
        }

        const conteynerFull = event.target.closest('.conteyner') // Контейнер всего задания
        const headerThisProblem = conteynerFull.querySelector('.number') // Верный ответ HTML
        const objInfo = getLocalStorage('color') // Объект {4001: gray, 4002: green, 4003: red...} 

        const idThisProblemHTML = conteynerFull.id // id Контейнера    
        const thisProblem = searchObjectById(idThisProblemHTML, allProblems) // Сама задача по индексу
        const idThisProblem = thisProblem.id // id этой задачи

        objInfo[idThisProblem] = headerThisProblem.classList[1] // Изменение этой задачи
        setLocalStorage('color', objInfo) // Сохранение в LocalStr
    })
}

// Появление цвета в currSubject в случае обновления страницы
function currColor(thisProblems){

    // КОТОРЫЕ ЕСТЬ НА СТРАНИЦЕ
    const inputAll = document.querySelectorAll('.input') // Все input
    const submitAll = document.querySelectorAll('.submit') // Все sumbit
    const allParents = document.querySelectorAll('.conteyner') // Все контейнеры
    const allAnswer = document.querySelectorAll('.answer') // Все контейнеры

    if (getLocalStorage('color')){ // Если до этого были цвета карточек

        // Проходимся по всем текущий задачам
        thisProblems.forEach((element, count) => {  
            const thisColor = getLocalStorage('color')[element.id] // Текущий цвет
            const parent = allParents[count] // Родитель текущей задачи
            const idProblem = +parent.id // id родителя (для задачи 11.20 id = 11020)
            const conteynerRightAnswer = parent.querySelector('.conteynerRightAnswer') // Берем контейнер "показать ответ" у контейнера всей задачи
                       
            if (thisColor === 'green'){ // Если зеленый        
                backgroundByCurr(idProblem, 'green') // Устанавливаем зеленый цвет для задачи с id контейнера
                inputAll[count].readOnly = true // Работаем с input и sumbit [count]
                submitAll[count].disabled = true // Работаем с input и sumbit [count]
                submitAll[count].classList.remove('button:hover') // Работаем с input и sumbit [count]
                allAnswer[count].classList.add('white')
             
            } else if (thisColor === 'red') { // Если красный
                allAnswer[count].classList.add('white')
                backgroundByCurr(idProblem, 'red') // Устанавливаем красный цвет для задачи с id контейнера
                conteynerRightAnswer.innerHTML = getRightAnswerHTML(thisProblems[count]) // Добавляем 'показать ответ'
                
                const rightAnswer = conteynerRightAnswer.querySelector('.showRightAnswer') // close --> show
                rightAnswer.classList.remove('close')
                rightAnswer.classList.add('show')

            } else backgroundByCurr(idProblem, 'gray')          
        })
    }
}

// Создание и/или сохрание input
function createAndSaveInputs(thisProblems){
    document.addEventListener('input', (event) => {
        // Если событие - не кнопка input, то выходим
        if (event.target.classList[0] != 'input') return 


        // Если нет в LocalStr currInfoShowRightAnswer, добавить
        if (!getLocalStorage('inputCurr')){
            const array = {}
            for (let i = 0; i < thisProblems.length; i++) array[thisProblems[i].id] = ''

            setLocalStorage('inputCurr', array)    
        }


        // Контейнер всего задания; текущий input
        const conteynerFull = event.target.closest('.conteyner')
        const thisInput = conteynerFull.querySelector('.input')

        // Объект {4001: gray, 4002: green, 4003: red...}
        const objInfo = getLocalStorage('inputCurr')
        
        // id этой карточки - id задачи (4030, 11021...)
        const idThisProblemHTML = conteynerFull.id
        
        // Сама задача по индексу 
        const thisProblem = searchObjectById(idThisProblemHTML, allProblems)
        // id этой задачи
        const idThisProblem = thisProblem.id

        // Изменение этой задачи; сохранение в LocalStr
        objInfo[idThisProblem] = thisInput.value
        setLocalStorage('inputCurr', objInfo)
    })
}

// Появление input в currSubject в случае обновления страницы
function currInput(thisProblems){

    // Берем все input со страницы, КОТОРЫЕ ЕСТЬ НА СТРАНИЦЕ
    const inputAll = document.querySelectorAll('.input')

    // Если до этого были введены ответы 
    if (getLocalStorage('inputCurr')){

        // Перебираем все текущие задания (могут быть в любом порядке)
        // Забираем значение input очередного задания через getLocalStorage('inputCurr')
        // {4001: "1", 4002: "", 4003: ""}
        thisProblems.forEach((element, count) => {
            const thisInput = getLocalStorage('inputCurr')[element.id]

            // Передаем сохраненное значение
            inputAll[count].value = thisInput 
        })
    }
}

function eventSendAnswer(){
    document.addEventListener('click', (event) => {

        // Если событие - не кнопка sumbit, то выходим
        if (event.target.classList[0] !== 'submit') return

        // Находим родителей кнопки; находим дочерний input; находим value этого input; находим дочерний sumbit; дочерний контейнер "правильного ответа"
        const parent = event.target.closest('.conteyner')
        const answerText = parent.querySelector('.answer')
        const answer = parent.querySelector('.input')
        const answerInput = answer.value.replace(',', '.')
        const submit = parent.querySelector('.submit')
        const conteynerRightAnswer = parent.querySelector('.conteynerRightAnswer')

        // Находим id контейнера-задачи; находим объект по id и берем answer
        const id = +parent.id
        const thisObject = searchObjectById(id, allProblems)
        const answerRight = thisObject.answer
        

        // Если верно, то: цвет фона - зеленый, input - только чтение, submit - нельзя нажимать + убираем hover. 
        // Иначе: цвет фона - красный
        if (answerInput != ''){
                answerText.classList.add('')
                if (String(answerRight) === answerInput) {
                    // Ставим зеленый фон задаче с id как у контейнера; меняем дочерний элементы; убираем "показать ответ"
                    backgroundByCurr(id, 'green')

                    answer.readOnly = true
                    submit.disabled = true
                    submit.classList.remove('button:hover')

                    conteynerRightAnswer.innerHTML = ''
                
                } else {
                    // Ставим фон фон задаче с id как у контейнера
                    backgroundByCurr(id, 'red')

                    // Находим объект текущей задачи
                    const currObject = searchObjectById(id, allProblems)

                    // В контейнер правильного ответа добавляем текст 
                    conteynerRightAnswer.innerHTML = getRightAnswerHTML(currObject)

                    // show "Показать ответ"
                    const rightAnswer = conteynerRightAnswer.querySelector('.showRightAnswer')
                    rightAnswer.classList.remove('close')
                    rightAnswer.classList.add('show')
            }
        }   
    })
}

// Создание и/или сохрание нажатия на "показать ответ"
function createAndSaveInfoAnswers(thisProblems){
    document.addEventListener('click', (event) => {
        // Если не кнопка "показать ответ" - выходим 
        if (event.target.classList[0] !== 'pokOtw') return

        // Если нет в LocalStr currInfoShowRightAnswer, добавить
        if (!getLocalStorage('currInfoShowRightAnswer')){
            const array = {}
            for (let i = 0; i < thisProblems.length; i++) array[thisProblems[i].id] = false
    
            setLocalStorage('currInfoShowRightAnswer', array)    
        }

        // Контейнер всего задания; верный ответ HTML
        const conteynerFull = event.target.closest('.conteyner')
        const rightAnswer = conteynerFull.querySelector('.rightAnswer')

        // Объект {4001: true, 4002: false, 4003: false...}
        const objInfo = getLocalStorage('currInfoShowRightAnswer')

        // id задачи (11020, 3004 ...)
        const idThisProblemHTML = conteynerFull.id
        // Сама задача по индексу 
        const thisProblem = searchObjectById(idThisProblemHTML, allProblems)
        // id этой задачи
        const idThisProblem = thisProblem.id

        
        // Изменение этой задачи; сохранение в LocalStr
        objInfo[idThisProblem] = rightAnswer.classList[1] === 'show'
        setLocalStorage('currInfoShowRightAnswer', objInfo) 
    })
}



// Обновление информации "показать ответ" при обновлении
function currInfoShowRightAnswer(thisProblems){
    // Если в LocalStr есть currInfoShowRightAnswer
    if (getLocalStorage('currInfoShowRightAnswer')){
        // Контейнеры всех задач
        const allConteynerRightAnswer = document.querySelectorAll('.conteyner')

        // Проходимся по всем задачам
        thisProblems.forEach((element, count) => { 

            // Значение: true/false
            const thisBoolean = getLocalStorage('currInfoShowRightAnswer')[element.id]

            // Если true, то
            if (thisBoolean){
                // Текущий контейнер; ответ-HTML этого контейнера
                const thisConteyner = allConteynerRightAnswer[count]
                const thisInfoAnswer = thisConteyner.querySelector('.rightAnswer')
                const thisPokOtw = thisConteyner.querySelector('.pokOtw')

                // close --> show
                thisInfoAnswer.classList.remove('close')
                thisInfoAnswer.classList.add('show')

                thisPokOtw.innerHTML = 'Скрыть ответ: '
            } 
        })

    }
}

function cleanUpLocalStorage(){
    const importantWord = ['record', 'special', 'stats']
    let importantArray = []

    importantWord.forEach(element => importantArray.push({key: element, value: getLocalStorage(element)}))
    localStorage.clear()
    
    importantArray.forEach(element => {if (element.value) setLocalStorage(element.key, element.value) })
}


// Получаем текущий массив задач
function getThisProblems() {
    return getLocalStorage('thisProblems')
}

// Ищем объект-задачу по id 
function searchObjectById(searchId, array){
    for (let index = 0; index < array.length; index ++){
        if (array[index].id === +searchId) return array[index]
    }
}


// Запись в LocalStr
function setLocalStorage(nameLocal, value){
    localStorage.setItem(nameLocal, JSON.stringify(value))
}


// Получение из LocalStr
function getLocalStorage(value){
    return JSON.parse(localStorage.getItem(value))
}


// Удаление из LocalStr
function removeLocalStorage(value){
    localStorage.removeItem(value)
}


// Смена background цвета
function background(color, index) {
    const allNumbers = document.querySelectorAll(".number")
    const allAnswer = document.querySelectorAll(".answer")
    
    allNumbers[index].classList.remove('gray', 'green', 'red')
    allNumbers[index].classList.add(color)
    
    allAnswer[index].classList.remove('gray1', 'green', 'red')
    if (color === 'gray') color = 'gray1'
    allAnswer[index].classList.add(color)
}

// Смена background цвета для currSubj
function backgroundByCurr(id, color){
    // Все контейнеры задач, КОТОРЫЕ ЕСТЬ СЕЙЧАС
    const allConteyners = document.querySelectorAll('.conteyner')

    // Перебираем все задачи
    allConteyners.forEach(element => {
        // Если id задачи === нашему id, которое мы хотим найти, то
        if (+element.id === id){
            // Дочерний number и answer
            const thisNumber = element.querySelector('.number')
            const thisAnswer = element.querySelector('.answer')


            // Стили

            thisNumber.classList.remove('gray', 'green', 'red')
            thisNumber.classList.add(color)

            thisAnswer.classList.remove('gray1', 'green', 'red')
            if (color === 'gray') color = 'gray1'
            thisAnswer.classList.add(color)
        } 
    })
}


// Сумма массива
function summArray(array){
    let sum = 0
    array.forEach((element, index) =>{ if (index != 0) sum += element})
    return sum
}


// Массив количеств задач [-, 0, 1, 3, ....]
function pushArrayCountProblem(){
    const DOMarrayCountProblem = ['-', ...document.getElementsByClassName('countProblem')]
    let arrayCountProblem = ['-']

    DOMarrayCountProblem.forEach((element, index) => {if (index != 0) arrayCountProblem.push(+element.value)})
    return arrayCountProblem
}


// Округление до сотых
function rounded(number){
    return +number.toFixed(2);
}


// Присваение все input в index значение = value
function countProblemToNumber(value){
    for (i = 0; i <= 10; i++) document.getElementsByClassName('countProblem')[i].value = value
}


// Изменение кнопки variantBTN в обычную
function defaultBtnVariant(){
    const variant = document.querySelector('.variantBTN')

    variant.innerHTML = `Составить вариант (Выбрано заданий: 0)`
    variant.disabled = true
    variant.classList.add('animation:hover')
}


// Смена кнопки "Вариант" (изменение количества заданий + нажимаемость)
function changeBtnVariant(){
    const variant = document.querySelector('.variantBTN')
    const arrayCountProblem = pushArrayCountProblem()
    const summProblems = summArray(arrayCountProblem)

    const startBtn = document.querySelector('.start')
    const finishBtn = document.querySelector('.finish')
    const valueStart = +startBtn.value
    const valueFinish = +finishBtn.value

    variant.innerHTML = `Составить вариант (Выбрано заданий: ${summProblems})`
    variant.disabled = summProblems === 0
    
    for (let i = 1; i <= 11; i++){
        const problemsByDifficulty = getObjectsFromAndTo(i, valueStart, valueFinish)
        if (problemsByDifficulty.length < arrayCountProblem[i]) variant.disabled = true
    }

    variant.disabled ? variant.classList.add('boom') : variant.classList.remove('boom')
}


// Функция для времени №1
// '4:30:20 12 Февраля 2023' --> [4, 30, 20]
function timeToArray(time){
    let timeNew = ''
    let index = 0
    let flag = true

    while (flag) {
        timeNew += time[index]
        index += 1

        if (time[index] === ' ') flag = false
    }
    timeNew = timeNew.split(':')
    let timeArray = []
    timeNew.forEach((element, index) => {if (index < 3) timeArray.push(+element)})
    return timeArray
}


// Функция для времени №2
// '23:40:20 12 Февраля 2023' --> '00:10:20'
function deadLine(time, minute, second){
    const hoursMinuteSecondArray = timeToArray(time)
    return `${addZero((hoursMinuteSecondArray[0] + +(hoursMinuteSecondArray[1] >= (60 - minute))) % 24)}:${addZero((hoursMinuteSecondArray[1] + minute + +(hoursMinuteSecondArray[2] >= (60 - second))) % 60)}:${addZero((hoursMinuteSecondArray[2] + second) % 60)}`
}


// Функция для времени №3
// '4' --> '04'; '23' --> '23'
function addZero(node){ return +node < 10 ? '0' + node : node }


// Обратный отсчет времени
// ('23:58:04', '00:03:50') --> '05:46'
function titleTime(thisTime, deadLine){
    thisTime = thisTime.split(':')
    deadLine = deadLine.split(':')

    if (thisTime[0] === '23' && deadLine[0] === '00') deadLine[0] = '24' 
    
    const secondLeft = (+deadLine[0] - +thisTime[0]) * 3600 + (+deadLine[1] - +thisTime[1]) * 60 + (+deadLine[2] - +thisTime[2]) * 1

    const result = `${addZero(parseInt(secondLeft / 60))}:${addZero(secondLeft % 60)}`
    return result 
}

function timeForSolution(thisTime, deadLine){
    const timeLeft = titleTime(thisTime, deadLine).split(':')
    let result = ''
    
    timeLeft[1] === '00' ? result = [30 - +timeLeft[0], +timeLeft[1]] : result = [29 - +timeLeft[0], 60 - +timeLeft[1]] 
    return `${addZero(result[0])}:${addZero(result[1])}`

}

// Прошел ли дедлайн?
// Если прошел, то true
// Если еще нет, то false
function deadLineNew(){
    let thisTime = `${getTime('h')}:${getTime('m')}:${getTime('s')}`
    let deadLine = getLocalStorage('deadLine')

    thisTime = +thisTime.replaceAll(':', '')
    deadLine = +deadLine.replaceAll(':', '')
    if (deadLine < 10000 && thisTime > 10000) deadLine += 240000
    return deadLine - thisTime <= 0 || deadLine - thisTime >= 110000
}


// Добавление PopUp на страницу
function addPopUp(thisTextPopUp, answer, rightAnswers, secondBall){
    const popUpBody = document.querySelector('.pop_up_body')
    const popUp = document.querySelector('.pop_up') 
    
    popUpBody.innerHTML += thisTextPopUp(answer, rightAnswers, secondBall) 
    popUp.classList.add('active')
}



// HTML PopUp контент для "формата ЕГЭ"
function textPopUpFull(answer, rightAnswers, secondBallArray){
            return `<div class='testEnd'> Тест завершен! </div> 
            <hr/>
            <div class='statsForEge1'>Общая информация</div>
            <div>Всего заданий: <span class='w900'>${answer.length}</span> </div> 
            <div>Решено верно:  <span class="greenColor w900"> ${rightAnswers} </span> </div>
            <div>Решено неверно: <span class="redColor w900"> ${answer.length - rightAnswers} </span></div>
            <div>Процент выполнения: <span class='w900'>${parseInt(rightAnswers / answer.length * 100)}% </span></div>
            <div>Потраченное время: <span class='w900'> ${timeForSolution(`${getTime('h')}:${getTime('m')}:${getTime('s')}`, getLocalStorage('deadLine'))}</span></div>
            <div class='statsForEge'>Статистика по «ЕГЭ профиль (1-11)»</div>
            <div>Первичных баллов: <span class='w900'>${rightAnswers}</span> </div>
            <div>Вторичных баллов: <span class='w900'>${secondBallArray[rightAnswers]}</span> </div>`
}


// HTML PopUp контент для НЕ "формата ЕГЭ"
function textPopUp(answer, rightAnswers){
    return `<div class='testEnd'> Тест завершен! </div> 
    <hr/>
    <div class='statsForEge1'>Общая информация</div>
    <div>Всего заданий: <span class='w900'>${answer.length}</span> </div> 
    <div>Верно решено: <span class='w900'>${rightAnswers} </span></div>
    <div>Неверно решено: <span class='w900'>${answer.length - rightAnswers} </span></div>
    <div>Процент выполнения: <span class='w900'>${parseInt(rightAnswers / answer.length * 100)}% </span></div>`
}


// Глобальная функция времени (variant)
function time(allProblemsMain){

    const acceptBtn = document.querySelector('.accept') // Забираем со страницы кнопку "завершить"
    const timePlace = document.querySelector('.time1') // "Место времени"
    const title = document.querySelector('.titleVariant') // "Верхняя надпись"
    let answerUser = [] // Список ответов
    const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'] 
    const timeFull = `${getTime('h')}:${getTime('m')}:${getTime('s')} ` // Определяем текущее время
    
    // Если нет deadLine или againVariant === afk, ставим новый deadLine и afk ==> deadLinePicked
    if ((!getLocalStorage('deadLine') || getLocalStorage('againVariant') === 'afk') && getLocalStorage('fromStats') != 0.5){
        setLocalStorage('deadLine', deadLine(timeFull, 30, 1))
        setLocalStorage('againVariant', 'deadLinePicked')
    }

    setInterval(() => { // setInterval раз в секунду
        
        if (getLocalStorage('againVariant') === 'deadLinePicked'){ // Если сейчас идет вариант (если нет, то "afk")

            // устанавливаем "верхнюю надпись"
            title.innerHTML = 'Вариант: ' + titleTime(`${getTime('h')}:${getTime('m')}:${getTime('s')}`, getLocalStorage('deadLine')) + ' осталось'

            // устанавливаем "место времени" 
            const textFull = `${getTime('h')}:${getTime('m')}:${getTime('s')} ${getTime('d')} ${month[getTime('mo')]} ${getTime('y')}`

            timePlace.innerHTML = textFull + `, дедлайн: ${getLocalStorage('deadLine')} (${titleTime(`${getTime('h')}:${getTime('m')}:${getTime('s')}`, getLocalStorage('deadLine'))} осталось)`
        }
            
        // Конец дедлайна
        // 1 условие - если закончился дедлайн; 2 условие - чтоб вызвался 1 раз
        if (getLocalStorage('fromStats') === null && deadLineNew() && getLocalStorage('againVariant') !== 'afk'){

            // Заголовок = 'Время вышло!'
            title.innerHTML = 'Время вышло!'

            // Убираем timePlace и inputVariant - все HTML поля input
            timePlace.innerHTML = 'Для повторного прохождения этого варианта обновите страницу'
            const inputVariant = document.querySelectorAll('input')
                
            // Все контейнеры
            const allParents = document.getElementsByClassName('conteyner')

            // В answerUser все ответы пользователя; количетво правильных ответов; количество верных ответов какого-то задания
            // Количество верных ответов какого-то задания; количество заданий какого-то задания
            inputVariant.forEach(element => answerUser.push(element.value))
            let rightAnswers = 0
            let countRightAnswer = ['-', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            const arrayCountProblem = getLocalStorage('countProblem')

            // Считаем кол-во правильных ответов + делаем background
            answerUser.forEach((element, index) => {
                if (element != '' && element.replace(',', '.') === String(allProblemsMain[index].answer)){ 
                    rightAnswers ++
                    background('green', index)
                } else {
                    background('red', index)

                    // Берем из текущего контейнера контейнер ответов и записываем туда getRightAnswerHTML()
                    const thisConteyner = allParents[index].querySelector('.conteynerRightAnswer')
                    thisConteyner.innerHTML = getRightAnswerHTML(allProblemsMain[index])

                    // showRightAnswer - весь блок answer -> делаем show
                    const rightAnswer = thisConteyner.querySelector('.showRightAnswer')
                    rightAnswer.classList.remove('close')
                    rightAnswer.classList.add('show')
                }
            })

            // disabled кнопки "принять"
            acceptBtn.disabled = true

            // "Режим чтения" всем кнопкам
            inputVariant.forEach(el => el.readOnly = true)

            // Вызываем PopUpFull 
            addPopUp(textPopUpFull, answerUser, rightAnswers, secondBallArray)

            // Замораживаем вариант
            setLocalStorage('againVariant', 'afk')

            // Заголовок = 'Результат'
            title.innerHTML = 'Результат'
            



            let infoLocalStorageObject = {}
            let arrayRightAnswer = []
            for (let i = 1; i <= 11; i++) arrayRightAnswer.push({right: countRightAnswer[i], count: arrayCountProblem[i]})
            arrayRightAnswer.push({right: rightAnswers, count: answerUser.length})

            getLocalStorage('stats') ? infoLocalStorageObject.name = getLocalStorage('stats').length + 1 : infoLocalStorageObject.name = 1
            infoLocalStorageObject.stats = arrayRightAnswer

            let arrayInfo = []
            if (getLocalStorage('stats')) getLocalStorage('stats').forEach(element => arrayInfo.push(element))

            arrayInfo.push(infoLocalStorageObject)
            setLocalStorage('stats', arrayInfo)
        }
    }, 1000)

    
}

// осталось/остался дней/дня/день
function getFullDaysBeforeExam(day){
    let first; let second
    if ((day >= 5 && day <= 20) || (day % 10 >= 5) || (day % 10 === 0)) {
        first = 'осталось'
        second = 'дней'
    } else if (day % 10 === 1){
        first = 'остался'
        second = 'день'
    } else {
        first = 'осталось'
        second = 'дня'
    }
    const days = daysBeforeExam()
    return `до ЕГЭ ${first} <span class='dayLeft'>${days}</span> ${second}`
}


// Дней до экзамена
function daysBeforeExam(){
    const EXAM = {month: 6, day: 1} // Костанта - день экзамена
    const thisDay = {month: getTime('mo') + 1, day: getTime('d')} // Формируем текущий день
    const pogresh = 2

    const dayLeft = (EXAM.month - thisDay.month) * 30 + (EXAM.day - thisDay.day) + pogresh // Сколько дней осталось
    return dayLeft
}


// Рандомный индекс массива allProblems (для stress)
function randomStress() {
    const randomIndex = Math.floor(Math.random() * allProblems.length)
    return allProblems[randomIndex]
}


// Возвращение времени
function getTime(value){
    const date = new Date()

    if (value === 's') return addZero(date.getSeconds())
    else if (value === 'm') return addZero(date.getMinutes())
    else if (value === 'h') return addZero(date.getHours())
    else if (value === 'd') return addZero(date.getDate())
    else if (value === 'mo') return date.getMonth()
    else if (value === 'y') return addZero(date.getFullYear())

}

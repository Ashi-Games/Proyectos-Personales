base = [2, 8, 3, 6]

def calcular_serie(n, lista=None):
    if lista is None:
        lista = []   
    if len(lista) < len(base):
        lista.append(base[len(lista)])
        return calcular_serie(n, lista)   
    if len(lista) >= n:
        return lista[:n]
    i = len(lista)
    siguiente = 5*lista[i-1] + 7*lista[i-2] - 3*lista[i-3] - 7*lista[i-4]
    lista.append(siguiente)
    return calcular_serie(n, lista)

def construir_matriz(serie, fila=0, col=0, matriz=None):
    n = len(serie)  
    if matriz is None:
        matriz = [[0] * n for _ in range(n)]
    if fila >= n:
        return matriz
    if col >= n:
        return construir_matriz(serie, fila + 1, 0, matriz)
    mitad = n // 2
    if fila == col:
        valor = serie[fila]    
    elif fila + col == n - 1:
        valor = 2 * serie[col]       
    elif col > fila:
        if fila + col < n - 1:
            valor = -1
        else:
            valor = -4
    else:
        if fila <= mitad:
            valor = -2
        else:
            valor = -3
    matriz[fila][col] = valor
    return construir_matriz(serie, fila, col + 1, matriz)

def imprimir_matriz(matriz):
    for fila in matriz:
        print(" ".join(str(v) for v in fila))

while True:
    try:
        m = int(input("Ingrese el tamaño de la matriz: "))
        if m >= 1:
            break
        else:
            print("El numero tiene que ser mayor a 0")
    except ValueError:
        print("Eso no es un numero, intente de nuevo")
serie = calcular_serie(m)
matriz = construir_matriz(serie)
print(f"\nLista generada: {serie}")
print(f"\nMatriz {m}x{m}:")
imprimir_matriz(matriz)
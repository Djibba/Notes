essence <- read.table("essence.txt",header = TRUE)#importer le fichier essence.txt

#Pour calculer la moyenne
xbar <- mean(essence$conso)
round(xbar,digits = 2)

#Pour calculer l'ecart type empirique
sprime <- sd(essence$conso)
round(sprime,digits = 2)

#Pour calculer la variance empirique non biaisée
sprime1 <- var(essence$conso)
round(sprime1,digits = 2)

#Pour calculer la variance biaisée
n_total <- dim(essence)[1]
v <- sprime1*(n_total-1)/n_total
round(v,digits = 2)

#Histogramme
hist(essence$conso,prob = TRUE,xlab = '',ylab = '',ylim = c(0,0.25),main = 'histogramme')

#Pour voir xbar dans la diagramme
m0 <- 31
hist(essence$conso,prob = TRUE,xlab = '',ylab = '',ylim = c(0,0.25),main = 'histogramme')
abline(v = xbar,col="red",lwd=3)
abline(v = m0,col="blue",lwd=3)
legend('topright',legend = ('Moyenne empirique'),col = "red",lty = 1,lwd=3)

#Densité
hist(essence$conso,prob = TRUE,xlab = '',ylab = '',ylim = c(0,0.25),main = 'histogramme')
curve(dnorm(x,mean = xbar,sd = sprime),col="red",lwd=2,add = TRUE,yaxt='n')

#Pour estimer une proportion, on considère la moyenne empirique qui est un estimateur consistant et sans 
#biais.

#Pour estimer une moyenne (théorique), on considère la moyenne empirique qui est un estimateur consistant 
#et sans biais.

#Pour estimer une variance (théorique), on considère :
#de manière privilégiée, la variance empirique corrigée , en 1/n−1 (c'est-à-dire S′2 ) qui est un estimateur 
#consistant et sans biais,
#éventuellement, la variance empirique non-corrigée , en 1n (c'est-à-dire V ) qui est un estimateur consistant 
#mais biaisé (même s'il est heureusement asymptotiquement sans biais).

#Un estimateur est exhaustif si la loi de l'échantillon (X1,…,Xn) conditionnellement à l'estimateur θˆ est 
#indépendante du paramètre θ .

#Un estimateur θˆ de θ est consistant (convergeant) si :
#θˆ→Pθ

#Pour calucluer l'intervale de confiance d'une proportion on tape les commandes suivantes l'une ou l'autre
 #prop.test(f, N, conf.level = 1-alpha)
 #binom.test(f, N, conf.level = 1-alpha)

 #Intervalle de confiance par la moyenne
alpha <- 0.05
icinf <- xbar - (qt(p = 1-alpha/2,df = n_total-1)*sprime/sqrt(n_total))
round(icinf,digits = 2)
#ou les commandes suivantes
#t.test(essence$conso,conf.level=1-alpha)

#Intervalle de confiance par la moyenne, on tape la commande suivante
# varTest(essence$conso,conf.level=1-alpha)

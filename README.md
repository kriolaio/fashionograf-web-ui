# fashionograf-web-ui


[![CircleCI](https://circleci.com/gh/kriolaio/fashionograf-web-ui/tree/master.svg?style=svg)](https://circleci.com/gh/kriolaio/fashionograf-web-ui/tree/master)



How To Deploy Fashionograf
    1-  Setup Ingress Controller
        https://github.com/kubernetes/ingress-nginx/blob/master/docs/deploy/index.md

        kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml
    
    2-  Setup Load Balancer
        kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/provider/cloud-generic.yaml

    3-  Setup DigitalOcean LoadBancer
        Forwading rules 
            TCP on port 80  TCP on port 32489
            TCP on port 443  TCP on port 30414
        Health checks
            tcp://0.0.0.0:30410

            Check Intervals 20
            Response Timeout 10
            Unhealty Threshold 3
            Healty Threshold 5

    4-  TLS
        Launch cert-manager
        helm install --name my-release \
        --set ingressShim.defaultIssuerName=letsencrypt-production \
        --set ingressShim.defaultIssuerKind=ClusterIssuer \
        stable/cert-manager 

        Create Clusterissuer
        Create Ingress
        Create Certificate
        




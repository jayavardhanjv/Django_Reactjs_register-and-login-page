from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Userdetail
from .serializers import userdetailsSerializers

@api_view(['GET', 'POST'])
def register(request, format=None):
    if request.method == "GET":
        userdetails = Userdetail.objects.all()
        serializer = userdetailsSerializers(userdetails, many=True)
        return Response(serializer.data)
    
    if request.method == "POST":
        serializer = userdetailsSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def userslist(request, format=None):
    if request.method == "GET":
        userdetails = Userdetail.objects.all()
        serializer = userdetailsSerializers(userdetails, many=True)
        return Response(serializer.data)
    
    # if request.method == "POST":
    #     serializer = userdetailsSerializers(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

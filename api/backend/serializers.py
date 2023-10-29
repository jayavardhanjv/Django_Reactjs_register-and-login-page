from rest_framework import serializers
from .models import Userdetail

class userdetailsSerializers(serializers.ModelSerializer):
    class Meta:
        model=Userdetail
        fields = ('id', 'email', 'username', 'password', 'is_verified')
# Generated by Django 3.1.2 on 2020-12-07 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0013_orderitem_price'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderitem',
            name='price',
        ),
        migrations.AlterField(
            model_name='productdetail',
            name='price',
            field=models.DecimalField(decimal_places=2, default=199, max_digits=6),
        ),
    ]

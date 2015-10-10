@extends('app')

@section('content')

    <div class="container" ng-app="itemApp" ng-controller="itemsController">
        <div class="row">
            <ul>
                <li ng-repeat="item in items"> <% item.title %></li>
            </ul>
            <button class="btn btn-success" ng-click="loadMore()">Load More</button>

        </div>
    </div>

@endsection
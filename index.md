---
layout: default
title: トップ / JavaScriptレベル1
description: トップ / JavaScriptレベル1　基礎文法1
---

# JavaScript レベル1

<div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
      The current link item
    </a>
    <a href="#" class="list-group-item list-group-item-action">A second link item</a>
    <a href="#" class="list-group-item list-group-item-action">A third link item</a>
    <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
    <a href="#" class="list-group-item list-group-item-action">A disabled link item</a>
  </div>

  <div class="list-group">
  {% for page in site.pages %}
    {% if page.identifier == 'study' %}
    <a href="{{ page.url | relative_url }}" class="list-group-item list-group-item-action d-flex gap-3 py-3 list-group-item-secondary" aria-current="true">
      <i class="fa-solid fa-book-open-reader" style="font-size:32px"></i>
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">{{ page.title }}</h6>
          <p class="mb-0 opacity-75">{{ page.title }}</p>
        </div>
        <small class="opacity-50 text-nowrap">{{ page.id }}</small>
      </div>
    </a>
    {% endif %}
  {% endfor %}
  </div>
</div>

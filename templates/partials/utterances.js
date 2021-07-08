{% if UTTERANCES_REPO %}
<script src="https://utteranc.es/client.js"
        repo="{{ UTTERANCES_REPO }}"
        issue-term="{{ UTTERANCES_ISSUE_TERM|default('pathname') }}"
        theme="{{ UTTERANCES_THEME|default('github-light') }}"
        crossorigin="{{ UTTERANCES_CROSSORIGIN|default('anonymous') }}"
        async>
</script>
{% endif %}
